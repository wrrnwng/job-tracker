from django.contrib import admin

from .models import Job


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ['company', 'position', 'status', 'applied_date', 'updated_at']
    list_filter = ['status']
    search_fields = ['company', 'position']
