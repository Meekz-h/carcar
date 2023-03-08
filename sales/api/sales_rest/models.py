from django.db import models


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)
    sold = models.BooleanField(default=False)

class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(unique=True)

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=14)

class Sale(models.Model):
    sales_person = models.ForeignKey(SalesPerson,related_name="sales", on_delete=models.CASCADE)
    purchaser = models.ForeignKey(Customer,related_name="sales",on_delete=models.CASCADE)
    vin = models.ForeignKey(AutomobileVO,related_name="sales",on_delete=models.CASCADE,unique=True)
    sale_price = models.IntegerField()
