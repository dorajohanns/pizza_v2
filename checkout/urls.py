from django.urls import path
from . import views

urlpatterns = [
    path('contactInfo', views.contactInfo, name="contactInfo"),
    path('paymentInfo', views.paymentInfo, name="paymentInfo")
]