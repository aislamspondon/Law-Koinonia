from django.urls import path
from lawyer_socity_news import views

urlpatterns = [
    path('', views.intro, name="newws"),
]