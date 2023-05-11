from django.db import models

# Create your models here.
class ContactInfo(models.Model):
    fullName = models.CharField(max_length=255)
    streetName = models.CharField(max_length=255)
    houseNumber = models.IntegerField()
    city = models.CharField(max_length=255)
    #MUNA GERA COUNTRY LÍKA!!!!!!
    postalCode = models.IntegerField()

