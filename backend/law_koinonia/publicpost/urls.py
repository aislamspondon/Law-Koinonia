from django.urls import path
from publicpost import views

urlpatterns = [
    path('', views.intro, name="post"),
]