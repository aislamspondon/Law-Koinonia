from django.contrib import admin
from publicpost.models import Like, Opinion, Post

# Register your models here.
admin.site.register(Post)
admin.site.register(Like)
admin.site.register(Opinion)

