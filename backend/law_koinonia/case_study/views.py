# from django.shortcuts import render
from case_study.models import CaseStudy
from case_study.serializer import CaseStudySerializer
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser
from rest_framework.response import Response


@api_view(['GET'])
def intro(request):
    return Response(data={"message": "Hello Case"}, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createCaseStudy(request):
    data = request.data
    title = data['title']
    tags = data['tags']
    case_study = CaseStudy.objects.create(
        user = request.user,
        title = title,
        tags = tags,
        file = request.FILES.get('case_file')
    )
    return Response("Uploaded Done")


@api_view(['GET'])
def getCaseStudy(request):
    cases = CaseStudy.objects.all()
    serializer = CaseStudySerializer(cases, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)