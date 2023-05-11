from django.db import models


class Offers(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    price = models.FloatField()


class OfferImage(models.Model):
    image = models.CharField(max_length=255)
    offer = models.ForeignKey(Offers, on_delete=models.CASCADE)


class Offer(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=500)
    price = models.FloatField()

