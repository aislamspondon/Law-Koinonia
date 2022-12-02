from account import views
from django.urls import path

urlpatterns = [
    path('profile', views.get_profile, name="profile"),
    path('profile/<str:username>', views.get_profile_username, name="profile-username"),
    path('profile-pic-upload', views.uploadProfileImage, name="profile-pic-upload"),
    path('admin/all/profile', views.get_allprofile, name="all-profile"),
    path('update-profile', views.update_profile, name="update-profile"),
    path('<str:username>/follow', views.user_follow_view, name="user-follow"),
    path('add_feed', views.user_add_feed, name="user-add-feed"),
]