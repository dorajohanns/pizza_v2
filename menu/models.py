from django.db import models


class PizzaType(models.Model):
    name = models.CharField(max_length=255)


class Pizza(models.Model):
    name = models.CharField(max_length=255)
    toppings = models.CharField(max_length=255)
    price = models.FloatField()
    image = models.CharField(max_length=255)


class PizzaImage(models.Model):
    image = models.CharField(max_length=9999)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)


class HasType(models.Model):
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    type = models.ForeignKey(PizzaType, on_delete=models.CASCADE)
