from django.db import models
from django.utils import timezone


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)
    make = models.CharField(max_length=200)
    model = models.CharField(max_length=200)
    year = models.PositiveSmallIntegerField()
    color = models.CharField(max_length=200)

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField()

class Service(models.Model):
    customer_name = models.CharField(max_length=200)
    appt_datetime = models.DateTimeField(default=timezone.now)
    reason = models.CharField(max_length=500)
    service_complete = models.BooleanField(default=False)
    input_vin = models.CharField(max_length=17)
    technician = models.ForeignKey(
        Technician,
        related_name="service",
        on_delete=models.CASCADE
    )
    auto = models.ForeignKey(
        AutomobileVO,
        related_name="service",
        on_delete=models.CASCADE,
        null=True,
    )
