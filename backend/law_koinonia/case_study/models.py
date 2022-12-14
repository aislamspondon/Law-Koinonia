from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()

# Create your models here.
class CaseStudy(models.Model):
    TAGS = (
        ('Articles', 'articles'),
        ('Books', 'books'),
        ('News', 'news'),
        ('Files', 'files'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=2000,blank=False, null=False )
    article = models.TextField(blank=True, null=True )
    tags = models.CharField(max_length=50, choices = TAGS, default=TAGS[0][0])
    images = models.ImageField(upload_to="client/images/case_study/images", blank=True)
    files = models.FileField(upload_to="client/images/case_study/files", blank=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


    def __str__(self):
        return str(self.title)