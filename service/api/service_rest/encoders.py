from common.json import ModelEncoder
from .models import Service, Technician, VehicleModelVO


class VehicleModelVOEncoder(ModelEncoder):
    model = VehicleModelVO
    properties = [
        "manufacturer",
        "name",
        "id"
    ]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number"
    ]

class ServiceEncoder(ModelEncoder):
    model = Service
    properties = [
        "customer_name",
        "appt_date",
        "appt_time",
        "reason",
        "technician",
        "vehicle",
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        "vehicle": VehicleModelVOEncoder()
    }
