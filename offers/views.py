from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

offers = [
    {'name': 'Two for One', 'description': 'Get 2 large pizzas for the price of one ', 'price': 3000, 'picture': 'tvooffer.jpeg'},
    {'name': 'Tuesday Offer', 'description': 'Pizza with two toppings for 1000kr', 'price': 1000, 'picture': 'margarita.jpg'},
    {'name': 'Offer2', 'description': 'Pizza with two toppings for 1000kr Pizza with two toppings for 1000kr Pizza with two toppings for 1000kr', 'price': 1000, 'picture': 'margarita.jpg'},
    {'name': 'Offer3', 'description': 'Pizza with two toppings for 1000kr Pizza with two toppings for 1000kr', 'price': 1000, 'picture': 'margarita.jpg'},
    {'name': 'Offer3', 'description': 'Pizza with two toppings for 1000kr Pizza with two toppings for 1000kr', 'price': 1000, 'picture': 'margarita.jpg'}
]

def index(request):
    return render(request, 'offers/offers.html', context={ 'offers': offers })