# from django.shortcuts import render
from publicpost.models import Post, PostOpinion
from publicpost.serializer import PostOpinionSerializer, PostSerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import (IsAdminUser, IsAuthenticated,
                                        IsAuthenticatedOrReadOnly)
from rest_framework.response import Response


# Create your views here.
@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Public Post"}, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_create(request, *args, **kwargs):
    serializer = PostSerializer(data=request.POST)
    if serializer.is_valid(raise_exception=True):
        serializer.save(author=request.user)
        return Response(data=serializer.data, status = 201)
    return Response({}, status=400)


@api_view(['GET'])
@permission_classes([IsAdminUser])
def post_list_view(request, *args, **kwargs):
    qs = Post.objects.all()
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAuthenticatedOrReadOnly, IsAuthenticated])
def my_post_list_view(request):
    user = request.user
    qs = Post.objects.filter(author=user)
    serializer = PostSerializer(qs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def post_detail_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id=post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = PostSerializer(obj, many=False)
    return Response(serializer.data, status=200)
    

@api_view(['DELETE'])
@permission_classes([IsAuthenticated, IsAdminUser])
def post_delete_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id=post_id)
    print(qs)
    print("This is")
    if not qs.exists():
        return Response({}, status=404)
    qs = qs.filter(author=request.user)
    if not qs.exists():
        return Response({"message": "You can't delete this Post"}, status=401)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Post Removed"}, status=200)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_like_toggle_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id = post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    if request.user in obj.likes.all():
        obj.likes.remove(request.user)
    else:
        obj.likes.add(request.user)
    return Response({"message": "Like Done"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_opinion_view(request, post_id, *args, **kwargs):
    qs = Post.objects.filter(id= post_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    user = request.user
    data = request.data
    comment_add = PostOpinion.objects.create(
        user = user,
        post = obj,
        comment = data['comment']
    )
    print()
    print(comment_add)
    # print(tk)
    serializer = PostOpinionSerializer(comment_add, many=False)
    return Response(serializer.data, status=status.HTTP_200_OK)
