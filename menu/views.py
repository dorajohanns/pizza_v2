from django.shortcuts import render
from menu.models import Pizza
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'menu-menu/menu.html', context={
        'pizzas': Pizza.objects.all().order_by('name')
    })

def get_pizza_by_id(request, id):
    return render(request, 'menu-menu/pizza_details.html', {
        'pizza': get_object_or_404(Pizza, pk=id)
    })
