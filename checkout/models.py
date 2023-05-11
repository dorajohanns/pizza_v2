from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    fullName = models.CharField(max_length=255)
    streetName = models.CharField(max_length=255)
    houseNumber = models.IntegerField()
    city = models.CharField(max_length=255)
    #MUNA GERA COUNTRY LÍKA!!!!!!
    postalCode = models.IntegerField()

class PaymentInfo(models.Model):
    cardholderName = models.CharField(max_length=255)
    cardNumber = models.IntegerField(max_length=12)
    expirationDate = models.IntegerField(max_length=4)
    cvc = models.IntegerField(max_length=3)


