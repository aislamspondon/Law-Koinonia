# from django.shortcuts import render
from account.models import Profile
from account.serializer import ProfileSerializer
from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

# Create your views here.

User = get_user_model()

@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Account"}, status=status.HTTP_200_OK)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile(request):
    user = request.user
    profile = Profile.objects.filter(user=user)
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_profile_username(request, username ,*args, **kwargs):
    user = request.user
    profile = Profile.objects.filter(username=username)
    obj = profile.first()
    serializer = ProfileSerializer(obj, many=False)
    return Response(serializer.data)
    # return Response("non")

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    data = request.data
    profile = Profile.objects.get(user=request.user)
    serializer = ProfileSerializer(profile, many=False)
    profile.description = data['description']
    profile.dob = data['dob']
    profile.designation = data['designation']
    profile.court = data['court']
    profile.present_address = data['present_address']
    profile.permanent_address = data['permanent_address']
    profile.barId = data['barId']
    profile.website = data['website']
    profile.facebook = data['facebook']
    profile.save()
    return Response(data=serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def get_allprofile(request):
    profile = Profile.objects.all()
    serializer = ProfileSerializer(profile, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def uploadProfileImage(request):
    data = request.data
    profile = Profile.objects.get(user=request.user)
    profile.profile_pic = request.FILES.get('profile_image')
    profile.save()
    return Response('Profile pic upload')

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username ,*args, **kwargs):
    current_user = request.user
    to_follow_user_qs = User.objects.filter(username=username)
    if current_user.username == username:
        my_profile = Profile.objects.filter(user__username=current_user.username).first()
        my_followers = my_profile.followers.all()
        return Response({"my followers count": my_followers.count()}, status=status.HTTP_200_OK)
    if not to_follow_user_qs.exists():
        return Response({}, status=status.HTTP_404_NOT_FOUND)
    to_follow_user = to_follow_user_qs.first()
    profile = Profile.objects.filter(user__username=username).first()
    if current_user in profile.followers.all():
        profile.followers.remove(current_user)
    else:
        profile.followers.add(current_user)
    current_follower_qs = profile.followers.all()
    return Response({"following": current_follower_qs.count()}, status=status.HTTP_200_OK)
    

from django.db.models import Q


@api_view(['GET','POST'])
@permission_classes([IsAuthenticated])
def user_add_feed(request, *args, **kwargs):
    current_user = request.user
    adminuser = User.objects.get(id=1)
    profile = Profile.objects.get(user=current_user)
    already_follows = profile.user.following.values()
    follows_username = [follow['username'] for follow in already_follows]
    if current_user.username not in follows_username:
        follows_username.append(current_user.username)
        follows_username.append(adminuser.username)
    
    alluser = User.objects.all().filter(~Q(username__in = follows_username))
    not_follow_username = [user for user in alluser]
    not_follow_profile = Profile.objects.all().filter(user__in = not_follow_username)
    serializer = ProfileSerializer(not_follow_profile, many=True)
    return Response(serializer.data)



