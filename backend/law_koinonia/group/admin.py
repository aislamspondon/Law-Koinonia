from django.contrib import admin
from group.models import (Group, Group_Like, Group_Member, Group_Opinion,
                          Group_Post)

# Register your models here.
admin.site.register(Group)
admin.site.register(Group_Post)
admin.site.register(Group_Member)
admin.site.register(Group_Opinion)
admin.site.register(Group_Like)
