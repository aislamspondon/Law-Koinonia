from account import views
from django.urls import path

urlpatterns = [
    path('profile', views.get_profile, name="profile"),
    path('admin/all/profile', views.get_allprofile, name="all-profile"),
    path('update-profile', views.update_profile, name="update-profile"),
]