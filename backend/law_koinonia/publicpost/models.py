from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


# Create your models here.
class PostLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='liker')
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name='liked_post')
    date_created = models.DateTimeField(auto_now_add=True)

class PostOpinion(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='opioner')
    post = models.ForeignKey("Post", on_delete=models.CASCADE, related_name='opnion_post')
    comment = models.CharField(max_length=100, blank=False)
    date_created = models.DateTimeField(auto_now_add=True)

class Post(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='post')
    likes = models.ManyToManyField(User, related_name='post_user_likes', blank=True, through=PostLike)
    opinion = models.ManyToManyField(PostOpinion, related_name='post_user_opinion', blank=True)
    content = models.CharField(max_length=250, blank=True)
    image = models.FileField(upload_to='client/images/post_images', blank=True, null=True)
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.content

    class Meta:
        ordering = ['-id']



