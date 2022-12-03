from case_study.models import CaseStudy
from django.contrib import admin


# Register your models here.
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'tags']
    class Meta:
        model = CaseStudy
admin.site.register(CaseStudy, CaseStudyAdmin)
