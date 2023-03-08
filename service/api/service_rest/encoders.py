from common.json import ModelEncoder
from .models import Service, Technician, AutomobileVO


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "id",
        "vin",
        "make",
        "model",
        "year",
        "color",
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
        "id",
        "customer_name",
        "appt_datetime",
        "reason",
        "technician",
        "input_vin",
        "service_complete"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
    }
