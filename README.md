# CarCar

Team:

* Taylor Wills - Service microservice
* Mico Hernandez- Sales microservice

## Design
There will be 3 seperate microservices that our front end will interact with. The inventory service will be responsible for the Automobiles, the Manufacturers, and the Vehicles. The service microservice will be responsible for Service appointments, technicians. The sales service will be responsible for customers, sales persons, and sales. With these 3 seperate service, we will create react pages to generate our pages according to the data stored within each microservice.
## Service microservice
My models for service are as follows:
*Service -
  customer name
  appointment date/time
  reason for appointment
  service complete boolean
  vin input from service form
  technician foreign key
  auto foreign key

*Technician -
  name
  employee number

*AutomobileVO -
  vin
  make
  model
  year
  color

Service is linked to Inventory through the AutomobileVO and poller, which grabs all the information in the Automobile model in the Inventory microservice. This is done in order to compare the the input vin to the entire inventory to determine if the vehicle being serviced was sold by the dealership in order to give them VIP treatment.

## Sales microservice

I will create several models;
### AutomobileVO:
* From inventory service;
* VIN

### Sales Person:
* Name
* Employee Number

### Potential Customer:
* Name
* Address
* Phone-number

### Sale Record:
* Sales Person (Foreign Key)
* Purchasers name (Foreign Key)
* VIN (Foreign Key)
* Price of sale

It will integrate with the inventory microservice by grabbing the vins from the Automobiles by the poller and storing that valueobject.
From these models I will be able to use the API to create,list,delete all requirements needed by the microservice.
From the front end, I plan to implement the appropriate NavLinks to each component.
I will then create and independent front page for each
