from authentication.models import User
from django.conf import settings
from rest_framework import serializers

from publicpost.models import Post, PostOpinion

MAX_POST_LENGTH = settings.MAX_POST_LENGTH
class PostOpinionSerializer(serializers.ModelSerializer):
    
    opioner = serializers.SerializerMethodField(read_only=True)
    post_id = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = PostOpinion
        fields = ['user', 'post_id', 'opioner', 'comment']

    def get_opioner(self, obj):
        return obj.user.username
    def get_post_id(self, obj):
        return obj.post.id


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']
        

class PostSerializer(serializers.ModelSerializer):
    likes = serializers.SerializerMethodField(read_only=True)
    opinion_count = serializers.SerializerMethodField(read_only=True)
    author = serializers.SerializerMethodField(read_only=True)
    author_id = serializers.SerializerMethodField(read_only=True)
    opinion = PostOpinionSerializer(many=True, read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'author','author_id','content', 'file','likes', 'opinion', 'opinion_count']
    
    def get_likes(self, obj):
        return obj.likes.count()
    def get_author(self, obj):
        author = obj.author
        serializer = UserSerializer(author, many=False)
        author_name = f"{serializer.data['first_name']} {serializer.data['last_name']}"
        return author_name
    def get_opinion_count(self, obj):
        return obj.opinion.count()
    def author_id(self, obj):
        return obj.author.id

    def validate_content(self, value):
        if len(value) > MAX_POST_LENGTH:
            raise serializers.ValidationError("THis post is too long")
        return value