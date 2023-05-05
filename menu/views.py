from django.shortcuts import render
from menu.models import Pizza
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'menu-menu/menu.html', context={
        'pizzas': Pizza.objects.all().order_by('name')
    })