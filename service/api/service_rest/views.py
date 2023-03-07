from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Service, VehicleModelVO, Technician
from .encoders import ServiceEncoder, TechnicianEncoder


@require_http_methods(["GET", "POST"])
def service_list(request):

    if request.method == "GET":
        service = Service.objects.all()
        print(service)
        return JsonResponse({
            "service": service,
        }, encoder=ServiceEncoder, safe=False)
    else:
        content = json.loads(request.body)
        try:
          technician_number = content["technician"]
          technician = Technician.objects.get(employee_number=technician_number)
          content["technician"] = technician

          vehicle_id = int(content["vehicle"][12:13])
          vehicle = VehicleModelVO.objects.get(id=vehicle_id)
          content["vehicle"] = vehicle

        except VehicleModelVO.DoesNotExist:
            return JsonResponse({
                "message": "Invalid vehicle name"
                },
                status=400,
            )
        service = Service.objects.create(**content)
        return JsonResponse(
            service,
            encoder=ServiceEncoder,
            safe=False,
        )



@require_http_methods(["GET", "POST"])
def technician_list(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse({
            "technician": technician
        }, encoder=TechnicianEncoder, safe=False)
    else:
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)

        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False,
        )
