# CarCar

Team:

* Taylor Wills - Service microservice
* Mico Hernandez- Sales microservice

## Design

## Service microservice


## Sales microservice

I will create several models;
# AutomobileVO:
* From inventory service;
* VIN

# Sales Person:
* Name
* Employee Number

# Potential Customer:
* Name
* Address
* Phone-number

# Sale Record:
* Sales Person (Foreign Key)
* Purchasers name (Foreign Key)
* VIN (Foreign Key)
* Price of sale

It will integrate with the inventory microservice by grabbing the vins from the Automobiles by the poller and storing that valueobject.
From these models I will be able to use the API to create,list,delete all requirements needed by the microservice.
From the front end, I plan to implement the appropriate NavLinks to each component.
I will then create and independent front page for each
