from django.contrib.auth import get_user_model
from django.db import models

# Create your models here.
User = get_user_model()

class Group(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    group_admin = models.ForeignKey(User, on_delete=models.CASCADE)
    group_name= models.CharField(max_length=100, blank=False, null=False)
    group_desc = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.group_name)

class Group_Member(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    group_user_id = models.AutoField(primary_key=True, editable=False)
    user = models.ForeignKey(User, on_delete= models.DO_NOTHING)
    join_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.group} => {self.user}"


class Group_Post(models.Model):
    author = models.ForeignKey(Group_Member, on_delete=models.CASCADE)
    caption = models.CharField(max_length=250, blank=True)
    image = models.ImageField(upload_to='client/images/group_images', blank=True)
    upload_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.upload_date)


class Group_Like(models.Model):
    post = models.ForeignKey(Group_Post, on_delete=models.CASCADE, related_name='liked_group_post')
    user = models.ForeignKey(Group_Member, on_delete=models.CASCADE, related_name='group_liker')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} : {}'.format(self.user, self.post)

class Group_Opinion(models.Model):
    post = models.ForeignKey(Group_Post, on_delete=models.CASCADE, related_name='group_opnion_post')
    user = models.ForeignKey(Group_Member, on_delete=models.CASCADE, related_name='group_opioner')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return '{} : {}'.format(self.user, self.post)