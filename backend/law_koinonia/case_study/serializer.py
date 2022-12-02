from case_study.models import CaseStudy
from rest_framework import serializers


class CaseStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = CaseStudy
        fields = '__all__'