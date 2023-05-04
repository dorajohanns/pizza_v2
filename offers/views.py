from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

offers = [
    {'name': 'tvennutilboð', 'description': '2 stórar pizzur og gos á 3000kr', 'price': 3000},
    {'name': 'fimmtudagstilboð', 'description': 'pizza með tveimur áleggstegundum á 1000kr', 'price': 1000}
]

def index(request):
    return render(request, 'offers/offers.html', context={ 'offers': offers })