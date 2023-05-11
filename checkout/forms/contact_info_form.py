from django.forms import ModelForm, widgets
from checkout.models import ContactInfo
class ContactInfoForm(ModelForm):
    class Meta:
        model = ContactInfo
        exclude = ['id']
        widgets = {
            'fullName': widgets.TextInput(attrs={'class': 'form-control'}),
            'streetName': widgets.TextInput(attrs={'class': 'form-control'}),
            'houseNumber': widgets.NumberInput(attrs={'class': 'form-control'}),
            'city': widgets.TextInput(attrs ={'class': 'form-control'}),
            #!!!!!MUNA EFTIR AÐ GERA: Country (displayed as a <select> HTML element)!!!!
            'postalCode': widgets.NumberInput(attrs={'class': 'form-control'})
        }