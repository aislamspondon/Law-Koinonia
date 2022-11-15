from authentication.models import User
from django.conf import settings
from publicpost.models import Post, PostOpinion
from rest_framework import serializers

MAX_POST_LENGTH = settings.MAX_POST_LENGTH
POST_ACTION_OPTIONS = settings.POST_ACTION_OPTIONS
class PostActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()

    def validate_action(self, value):
        value = value.lower().strip()
        if not value in POST_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not valid Action")
        return value
    
class PostOpinionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PostOpinion
        fields = ['comment']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
        

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    opinion_count = serializers.SerializerMethodField(read_only=True)
    author = serializers.SerializerMethodField(read_only=True)
    opinion = PostOpinionSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'author','content', 'likes', 'opinion', 'opinion_count']
    
    def get_likes(self, obj):
        return obj.likes.count()
    def get_author(self, obj):
        author = obj.author
        serializer = UserSerializer(author, many=False)
        author_name = f"{serializer.data['first_name']} {serializer.data['last_name']}"
        return author_name
    def get_opinion_count(self, obj):
        return obj.opinion.count()

    def validate_content(self, value):
        if len(value) > MAX_POST_LENGTH:
            raise serializers.ValidationError("THis post is too long")
        return value