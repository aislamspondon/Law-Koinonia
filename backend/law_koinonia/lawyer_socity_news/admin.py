from django.contrib import admin
from lawyer_socity_news.models import Like, News, News_Category, Opinion

# Register your models here.
admin.site.register(News_Category)
admin.site.register(News)
admin.site.register(Like)
admin.site.register(Opinion)
