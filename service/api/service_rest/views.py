from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import Service, AutomobileVO, Technician
from .encoders import ServiceEncoder, TechnicianEncoder


@require_http_methods(["GET", "POST"])
def service_list(request):

    if request.method == "GET":
        service = Service.objects.all()
        return JsonResponse({
            "service": service,
        }, encoder=ServiceEncoder, safe=False)
    else:
        content = json.loads(request.body)
        try:

            technician_number = content["technician"]
            technician = Technician.objects.get(employee_number=technician_number)
            content["technician"] = technician

            # print("****************************",content["auto"])
            # auto = AutomobileVO.objects.get(id=content["auto"])
            # content["auto"] = auto

        #    \/ AutomobileVO.DoesNotExist
        except:
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

@require_http_methods(["GET", "PUT", "DELETE"])
def show_service(request, id):

    if request.method == "GET":
        service = Service.objects.get(id=id)
        return JsonResponse(
            {"service": service},
            encoder=ServiceEncoder,
        )
    elif request.method == "DELETE":
        try:
            service = Service.objects.get(id=id)
            service.delete()
            return JsonResponse(
            {"service": service},
            encoder=ServiceEncoder,
            )
        except Service.DoesNotExist:
            return JsonResponse({"message": "Service Appointment Does Not Exist"})
    else:
        content = json.loads(request.body)
        Service.objects.filter(id=id).update(**content)
        service = Service.objects.get(id=id)

        return JsonResponse(
        {"service": service},
        encoder=ServiceEncoder,
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
