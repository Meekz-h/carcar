from django.urls import path
from .views import api_list_salesperson,api_list_customers,api_list_sales
urlpatterns = [
    path("salespersons/", api_list_salesperson, name="api_list_salesperson"),
    path("customers/",api_list_customers,name="api_list_customers"),
    path("sales/",api_list_sales,name="api_list_sales"),
    path("sales/<int:id>",api_list_sales,name="api_list_sales_salesperson"),
]
