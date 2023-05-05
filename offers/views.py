from django.shortcuts import render
from offers.models import Offers
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'offers/offers.html', context={
        'offers': Offers.objects.all().order_by('name')
    })