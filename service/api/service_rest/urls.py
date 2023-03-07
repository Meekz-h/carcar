from django.urls import path
from .views import service_list, technician_list

urlpatterns = [
    path("", service_list, name='service_list'),
    path("technicians/", technician_list, name='technician_list'),
]
