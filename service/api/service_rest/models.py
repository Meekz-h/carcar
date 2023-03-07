from django.db import models

class VehicleModelVO(models.Model):
    name = models.CharField(max_length=200)
    import_href = models.CharField(max_length=200, unique=True)

class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField()

class Service(models.Model):
    customer_name = models.CharField(max_length=200)
    appt_date = models.DateField()
    appt_time = models.TimeField()
    reason = models.CharField(max_length=500)
    vin = models.CharField(max_length=200)
    technician = models.ForeignKey(
        Technician,
        related_name="service",
        on_delete=models.CASCADE
    )
    vehicle = models.ForeignKey(
        VehicleModelVO,
        related_name="service",
        on_delete=models.CASCADE,
        null=True,
    )
