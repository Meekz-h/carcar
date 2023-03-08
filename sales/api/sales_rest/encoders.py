from .models import AutomobileVO, Sale, SalesPerson, Customer
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "sold"]

class SalesPersonListEncoder(ModelEncoder):
    model = SalesPerson
    properties =["name", "id", "employee_number"]

class SalesPersonDetailEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_number"]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = ["name", "id", "address"]

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
