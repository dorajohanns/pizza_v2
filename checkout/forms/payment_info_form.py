from django.forms import ModelForm, widgets
from checkout.models import PaymentInfo

class PaymentInfoForm(ModelForm):
    class Meta:
        model = PaymentInfo
        exclude = [ 'id' ]
        widgets = {
            'cardholderName': widgets.TextInput(attrs={'class': 'form-control'}),
            'cardNumber': widgets.TextInput(attrs={'class': 'form-control'}),
            'expirationDate': widgets.TextInput(attrs={'class': 'form-control'}),
            'cvc': widgets.TextInput(attrs ={'class': 'form-control'})
        }