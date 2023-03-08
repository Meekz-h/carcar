from django.urls import path
from .views import service_list, technician_list, show_service

urlpatterns = [
    path("service/", service_list, name='service_list'),
    path("technicians/", technician_list, name='technician_list'),
    path("service/<int:id>/", show_service, name="show_service")
]
