from account.models import Profile
from rest_framework import serializers


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
        # fields = ['id', 'full_name', 'profile_pic', 'username','email', 'phone_number', 'description', 'dob', 'designation', 'court', 'barId', 'website', 'facebook']
