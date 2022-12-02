from account.models import Profile
from lawyer_group.models import LawyerGroup
from lawyer_group.serializer import LawyerGroupSerializer
from rest_framework import serializers


class FollwingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['id', 'full_name', 'profile_pic', 'username', 'designation', 'barId', 'court']

class ProfileSerializer(serializers.ModelSerializer):
    followers_count = serializers.SerializerMethodField(read_only=True)
    following_count = serializers.SerializerMethodField(read_only=True)
    group_count = serializers.SerializerMethodField(read_only=True)
    groups = serializers.SerializerMethodField(read_only=True)
    connection_count = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    connection = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Profile
        # fields = '__all__'
        fields = ['id', 'full_name', 'profile_pic', 'username','email','followers', 'following', 'connection','groups', 'connection_count', 'followers_count','following_count', 'group_count', 'phone_number', 'description', 'dob', 'designation', 'court', 'present_address', 'permanent_address', 'barId', 'website', 'facebook']
    
    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_followers(self, obj):
        followers_all = obj.followers.all()
        profile = Profile.objects.all().filter(user__in=followers_all)
        serializers = FollwingSerializer(profile, many=True)
        return serializers.data
    
    def get_following_count(self, obj):
        return obj.user.following.count()

    def get_group_count(self, obj):
        group_member = LawyerGroup.objects.all().filter(group_member__user__username=obj.username)
        return group_member.count()

    
    def get_groups(self, obj):
        group_member = LawyerGroup.objects.all().filter(group_member__user__username=obj.username)
        serializer = LawyerGroupSerializer(group_member, many=True)
        return serializer.data

    
    def get_following(self, obj):
        following =  obj.user.following.all()
        serializer = FollwingSerializer(following, many=True)
        return serializer.data

    def get_connection(self, obj):
        connection = []
        followers_all = obj.followers.all()
        following_all =  obj.user.following.all()
        following = [follow.username for follow in following_all]
        followers = [follow.username for follow in followers_all]
        for i in followers:
            if i in following:
                connection.append(i)
        profile = Profile.objects.all().filter(username__in=connection)
        serializer = FollwingSerializer(profile, many=True)
        return serializer.data
    
    
    def get_connection_count(self, obj):
        connection = []
        followers_all = obj.followers.all()
        following_all =  obj.user.following.all()
        following = [follow.username for follow in following_all]
        followers = [follow.username for follow in followers_all]
        for i in followers:
            if i in following:
                connection.append(i)
        return len(connection)
    
