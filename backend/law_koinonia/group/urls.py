from django.urls import path
from group import views

urlpatterns = [
    path('', views.intro, name="Group"),
]