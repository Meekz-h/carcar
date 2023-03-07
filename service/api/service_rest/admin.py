from django.contrib import admin
from .models import VehicleModelVO, Technician, Service


@admin.register(VehicleModelVO)
class VehicleModelVOAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    pass
