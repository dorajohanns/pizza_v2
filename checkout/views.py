from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from checkout.forms.contact_info_form import ContactInfoForm
from checkout.forms.payment_info_form import PaymentInfoForm
from checkout.models import ContactInfo, PaymentInfo, Countries

# Create your views here.

#@login_required
#def index(request):
    #return render(request, 'checkout/contact_info.html')

@login_required
def contactInfo(request):
    if request.method == 'POST':
        form = ContactInfoForm(data=request.POST)
        if form.is_valid():
            form.save()
            return redirect('paymentInfo')

    return render(request,'checkout/contact_info.html',{
        'form': ContactInfoForm(),
        'countries': Countries.objects.all().order_by('name')
    })

def paymentInfo(request):
    if request.method == 'POST':
        form = PaymentInfoForm(data=request.POST)
        if form.is_valid():
            form.save()
            return render(request, 'checkout/review_step.html')

    return render(request,'checkout/payment_info.html',{
        'form': PaymentInfoForm()
    })

def confirmation(request):
    return render(request, 'checkout/confirmation.html')




