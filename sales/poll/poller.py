import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "sales_project.settings")
django.setup()

from sales_rest.models import AutomobileVO

def get_autos():
    response = requests.get("http://inventory-api:8000/api/automobiles/")
    content = json.loads(response.content)
    for auto in content["autos"]:
        AutomobileVO.objects.update_or_create(
            vin = auto["vin"]
        )
    autos = AutomobileVO.objects.all()

    #Prints in container to double check poller is creating AutomobileVO's
    print("AutomobileVO's:",autos)


def poll():
    while True:
        print('Sales poller polling for data')
        try:
            get_autos()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(60)


if __name__ == "__main__":
    poll()
