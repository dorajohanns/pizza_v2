from django.shortcuts import render
from menu.models import Pizza
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
# Create your views here.


def index(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        pizzas = [{
            'id':x.id,
            'name':x.name,
            'toppings':x.toppings,
            'image':x.image,
        }for x in Pizza.objects.filter(name__icontains=search_filter)]

        return JsonResponse({'data':pizzas })

    return render(request, 'menu-menu/menu.html', context={
        'pizzas': Pizza.objects.all().order_by('name')
    })