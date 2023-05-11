from django.urls import path
from . import views

urlpatterns = [
    #http://localhost:8000/checkout
    #path('', views.index, name="checkout"),
    #path('<int:id>', views.get_pizza_by_id, name="pizza-details") muna gera
    path('contactInfo', views.contactInfo, name="contactInfo"),
    path('paymentInfo', views.paymentInfo, name="paymentInfo")
]