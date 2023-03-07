import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here.
from service_rest.models import VehicleModelVO

def get_vehicle():

    response = requests.get("http://inventory-api:8000/api/models/")
    content = json.loads(response.content)
    print("********************", content["models"])
    for vehicle in content["models"]:
        VehicleModelVO.objects.update_or_create(
            import_href=vehicle["href"],
            defaults={
            "name": vehicle["name"],
            },
        )

def poll():
    while True:
        print('Service poller polling for data')
        try:
            get_vehicle()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(15)


if __name__ == "__main__":
    poll()
