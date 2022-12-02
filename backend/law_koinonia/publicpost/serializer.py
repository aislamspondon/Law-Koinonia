from account.models import Profile
from authentication.models import User
from django.conf import settings
from publicpost.models import Post, PostOpinion
from rest_framework import serializers

MAX_POST_LENGTH = settings.MAX_POST_LENGTH

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'full_name', 'profile_pic', 'username','designation', 'court', 'barId']
   
class PostOpinionSerializer(serializers.ModelSerializer):
    
    opinioner = serializers.SerializerMethodField(read_only=True)
    post_id = serializers.SerializerMethodField(read_only=True)
    opinioner_name = serializers.SerializerMethodField(read_only=True)
    opinioner_pic = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = PostOpinion
        fields = ['id','user', 'post_id', 'opinioner', 'opinioner_name','opinioner_pic', 'comment']

    def get_opinioner(self, obj):
        return obj.user.username
    def get_opinioner_name(self, obj):
        profile = Profile.objects.get(user=obj.user)
        serializer = ProfileSerializer(profile, many=False)
        opinioner_name = serializer.data['full_name']
        return opinioner_name
    def get_opinioner_pic(self, obj):
        profile = Profile.objects.get(user=obj.user)
        serializer = ProfileSerializer(profile, many=False)
        opinioner_pic = serializer.data['profile_pic']
        return opinioner_pic
    def get_post_id(self, obj):
        return obj.post.id


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']

     

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    likers = serializers.SerializerMethodField(read_only=True)
    opinion_count = serializers.SerializerMethodField(read_only=True)
    author = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    author_id = serializers.SerializerMethodField(read_only=True)
    profile_pic = serializers.SerializerMethodField(read_only=True)
    designation = serializers.SerializerMethodField(read_only=True)
    court = serializers.SerializerMethodField(read_only=True)
    profile_pic = serializers.SerializerMethodField(read_only=True)
    opinion = PostOpinionSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'author','username','author_id', 'profile_pic', 'designation', 'court', 'content', 'file','likes', 'likers' ,'opinion', 'opinion_count' ]
    
    def get_likes(self, obj):
        return obj.likes.count()
    def get_likers(self, obj):
        likers = obj.likes.values()
        liker_user = [liker['username'] for liker in likers]
        liker_profile = Profile.objects.all().filter(username__in=liker_user)
        serializer = ProfileSerializer(liker_profile, many=True)
        return serializer.data
    def get_author(self, obj):
        author = obj.author
        serializer = UserSerializer(author, many=False)
        author_name = f"{serializer.data['first_name']} {serializer.data['last_name']}"
        return author_name
    
    def get_username(self, obj):
        author = obj.author
        return author.username

    def get_profile_pic(self, obj):
        author = obj.author
        profile = Profile.objects.get(user=author)
        serializer = ProfileSerializer(profile, many=False)
        author_pic = serializer.data['profile_pic']
        return author_pic
    def get_designation(self, obj):
        author = obj.author
        profile = Profile.objects.get(user=author)
        serializer = ProfileSerializer(profile, many=False)
        designation = serializer.data['designation']
        return designation
    def get_court(self, obj):
        author = obj.author
        profile = Profile.objects.get(user=author)
        serializer = ProfileSerializer(profile, many=False)
        court = serializer.data['court']
        return court
    
    def get_opinion_count(self, obj):
        return obj.opinion.count()
    def author_id(self, obj):
        return obj.author.id

    def validate_content(self, value):
        if len(value) > MAX_POST_LENGTH:
            raise serializers.ValidationError("THis post is too long")
        return value
