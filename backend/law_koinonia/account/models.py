from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver

# Create your models here.
User = get_user_model()

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    full_name = models.CharField(max_length=100, blank=True, null=True)
    profile_pic = models.ImageField(upload_to='client/images/profile_pics/', blank=True)
    description = models.TextField(blank=True)
    dob = models.DateField(blank=True, null=True)
    designation = models.CharField(max_length=50, blank=True)
    court = models.CharField(max_length=250, blank=True)
    barId = models.CharField(max_length=250, blank=True)
    website = models.URLField(blank=True)
    facebook = models.URLField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name}'s Profile"

class ExtraCourt(models.Model):
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    court = models.CharField(max_length=250, blank=True)
    created = models.DateTimeField(auto_now_add=True)

@receiver(post_save, sender=User)
def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(user=instance , full_name=f"{instance.first_name} {instance.last_name}")


@receiver(post_save, sender=User)
def save_profile(sender, instance, **kwargs):
    instance.profile.save()

class Follow(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name='follower')
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name='following')
    contact = models.ForeignKey(User, on_delete=models.CASCADE, related_name='contact')
    created_date = models.DateTimeField(auto_now_add=True)