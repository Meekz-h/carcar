from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Sale, SalesPerson, Customer

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties =["name","id", "employee_number"]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name","employee_number"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name","id","address"]

class CustomerDetailEncoder(ModelEncoder):
    model = Customer
    properties = ["name","address","phone_number","id"]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = ["id","purchaser","sales_person","sale_price","vin"]
    encoders = {
        "sales_person":SalesPersonListEncoder(),
        "purchaser":CustomerListEncoder(),
        "vin":AutomobileVOEncoder(),
    }

@require_http_methods(["GET","POST"])
def api_list_salesperson(request):
    if request.method == "GET":
        salespersons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons":salespersons},
            encoder=SalesPersonListEncoder)
    else:
        content = json.loads(request.body)
        salesperson = SalesPerson.objects.create(**content)
        return JsonResponse(
            salesperson,
            encoder=SalesPersonDetailEncoder,
            safe=False
        )

@require_http_methods(["GET","POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse(
            {"customers":customers},
            encoder=CustomerListEncoder,
        )
    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerDetailEncoder,
            safe=False
        )

@require_http_methods(["GET","POST"])
def api_list_sales(request,id=None):
    if request.method == "GET":
        if id is None:
            sales = Sale.objects.all()
        else:
            sales=Sale.objects.filter(sales_person__employee_number=id)
        return JsonResponse(
            {"sales":sales},
            encoder= SaleListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            if "sales_person" in content:
                sales_person = SalesPerson.objects.get(employee_number=content["sales_person"])
                content["sales_person"]= sales_person
            if "purchaser" in content:
                purchaser = Customer.objects.get(id=content["purchaser"])
                content["purchaser"] = purchaser
            if "vin" in content:
                auto = AutomobileVO.objects.get(vin=content["vin"])
                content["vin"] = auto
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message","Invalid sales person"},
                status=400
            )
        sale = Sale.objects.create(**content)
        return JsonResponse(
            sale,
            encoder=SaleListEncoder,
            safe=False,
        )
