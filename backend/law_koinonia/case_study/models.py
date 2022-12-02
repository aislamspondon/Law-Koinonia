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
    title = models.TextField(blank=False, null=False )
    tags = models.CharField(max_length=50, choices = TAGS, default=TAGS[0][0])
    files = models.FileField(upload_to="client/images/case_study", blank=True)


    def __str__(self):
        return str(self.title)