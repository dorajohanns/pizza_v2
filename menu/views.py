from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
pizzas = [
    {'name': 'Margarita', 'price': 1299, 'desc':' classic pizza topped with tomato sauce and Icelandic mozzarella.', 'photo': '../../static/images/margarita.jpg'},
    {'name': 'Pepperoni', 'price': 1499, 'desc': 'A classic pizza topped with tomato sauce, Icelandic mozzarella, and pepperoni slices.', 'photo': '../../static/images/pepperoni.jpg'},
    {'name': 'Hawaii', 'price': 1399, 'desc': 'A pizza topped with tomato sauce, mozzarella cheese, ham, and pineapple.', 'photo': '../../static/images/ananas.jpg'}
]
def index(request):
    return render(request, 'menu-menu/menu.html', context={
        'pizzas': pizzas
    })