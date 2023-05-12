from django.db import models
from creditcards.models import CardNumberField, CardExpiryField, SecurityCodeField

# Create your models here.


class ContactInfo(models.Model):
    fullName = models.CharField(max_length=255)
    streetName = models.CharField(max_length=255)
    houseNumber = models.IntegerField()
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    postalCode = models.IntegerField()


class PaymentInfo(models.Model):
    cardholderName = models.CharField(max_length=255)
    cardNumber = models.CharField(max_length=255)
    expirationDate = models.CharField(max_length=255)
    cvc = models.CharField(max_length=255)


class Countries(models.Model):
    name = models.CharField(max_length=255)
    def __str__(self):
        return self.name
