from case_study import views
from django.urls import path

urlpatterns = [
    path('', views.intro, name="case_study"),
    path('create', views.createCaseStudy, name="create-case-study"),
    path('cases', views.getCaseStudy, name="get-case_study"),
    
]