# from django.shortcuts import render
from account.models import Profile
from account.serializer import ProfileSerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response


# Create your views here.
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

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    data = request.data
    profile = Profile.objects.get(user=request.user)
    serializer = ProfileSerializer(profile, many=False)
    profile.description = data['description']
    profile.dob = data['dob']
    profile.designation = data['designation']
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


