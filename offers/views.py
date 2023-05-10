from django.shortcuts import render, get_object_or_404
from offers.models import Offers
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.decorators import login_required
from menu.models import Pizza
# Create your views here.


def index(request):
    return render(request, 'offers/offers.html', context={
        'offers': Offers.objects.all().order_by('name')
    })

def get_offer_by_id(request, id):
    return render(request, 'offers/offer_details.html', {
        'offer': get_object_or_404(Offers, pk=id),
        'pizzas': Pizza.objects.all().order_by('name')
    })