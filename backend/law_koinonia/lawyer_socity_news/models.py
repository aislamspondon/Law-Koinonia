from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()

# Create your models here.
class News_Category(models.Model):
    name = models.CharField(max_length=60, blank=False, null=False)
    parent = models.ForeignKey('self', related_name='case_category_children', on_delete=models.CASCADE, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'Categories'


class News(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=250, blank=False, null=False )
    news_category = models.ForeignKey(News_Category, on_delete=models.CASCADE)
    news_details = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to='editor/news/images')
    video = models.CharField(max_length=250, blank=True, null=True)
    country = models.CharField(max_length=50, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.title)
    class Meta:
        ordering = ['-created', ]
        verbose_name_plural = 'News'

class Like(models.Model):
    post = models.ForeignKey(News, on_delete=models.CASCADE, related_name='liked_news')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='news_liker')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} : {}'.format(self.user, self.post)

class Opinion(models.Model):
    post = models.ForeignKey(News, on_delete=models.CASCADE, related_name='opnion_news')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='news_opioner')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} : {}'.format(self.user, self.post)


