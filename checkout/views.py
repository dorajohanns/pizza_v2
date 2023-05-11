from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from checkout.forms.contact_info_form import ContactInfoForm
from checkout.models import ContactInfo

# Create your views here.

@login_required
def index(request):
    return render(request, 'checkout/contact_info.html')

def contactInfo(request):
    if request.method == 'POST':
        print(1)
    else:
        form = ContactInfoForm()
    return render(request, 'checkout/contact_info.html', {
        'form': form
    })
