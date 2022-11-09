from account.models import ExtraCourt, Follow, Profile
from django.contrib import admin


# Register your models here.
class ProfileExtraCourt(admin.StackedInline):
    model = ExtraCourt

class CourtAdmin(admin.ModelAdmin):
    inlines = [ProfileExtraCourt]

admin.site.register(Profile, CourtAdmin)
admin.site.register(Follow)
