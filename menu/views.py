from menu.models import Pizza
from menu.models import HasType
from menu.models import PizzaType
from django.shortcuts import render, get_object_or_404
from django.contrib.auth.decorators import login_required
from django.http import HttpResponse, JsonResponse
# Create your views here.

def index(request):
    if 'search_filter' in request.GET:
        search_filter = request.GET['search_filter']
        pizzas = []
        for pizza in Pizza.objects.filter(name__icontains=search_filter).prefetch_related('hastype_set__type'):
            pizza_type = pizza.hastype_set.first().type.name if pizza.hastype_set.first() is not None else ''
            pizza_data = {
                'id': pizza.id,
                'name': pizza.name,
                'toppings': pizza.toppings,
                'image': pizza.image,
                'price': int(pizza.price),
                'type': pizza_type.replace(' ',''),
            }
            pizzas.append(pizza_data)

        return JsonResponse({'data': pizzas})

    if 'sort_by_name' in request.GET and request.GET['sort_by_name'] == 'asc':
        pizzas = Pizza.objects.all().order_by('name')
    elif 'sort_by_name' in request.GET and request.GET['sort_by_name'] == 'desc':
        pizzas = Pizza.objects.all().order_by('-name')
    elif 'sort_by_price' in request.GET and request.GET['sort_by_price'] == 'asc':
        pizzas = Pizza.objects.all().order_by('price')
    elif 'sort_by_price' in request.GET and request.GET['sort_by_price'] == 'desc':
        pizzas = Pizza.objects.all().order_by('-price')
    else:
        pizzas = Pizza.objects.all().order_by('name')

    return render(request, 'menu-menu/menu.html', context={
        'pizzas': pizzas,
        'types': PizzaType.objects.all().order_by('name')
    })

def get_pizza_by_id(request, id):
    return render(request, 'menu-menu/pizza_details.html', {
        'pizza': get_object_or_404(Pizza, pk=id)
    })





