from django.forms import ModelForm, widgets
from django import forms
from checkout.models import ContactInfo, Countries
class ContactInfoForm(ModelForm):

    def __init__(self, *args, **kwargs):
        super(ContactInfoForm, self).__init__(*args, **kwargs)
        self.fields['country'].widget = forms.Select(choices=self.get_country_choices(),
                                                     attrs={'class': 'form-control'})

    def get_country_choices(self):
        countries = Countries.objects.all().order_by('name')
        countrylist = []
        for i in countries:
            countrylist.append((i.name, i.name))
        return countrylist


    class Meta:
        model = ContactInfo
        exclude = [ 'id' ]
        widgets = {
            'fullName': widgets.TextInput(attrs={'class': 'form-control'}),
            'streetName': widgets.TextInput(attrs={'class': 'form-control'}),
            'houseNumber': widgets.NumberInput(attrs={'class': 'form-control'}),
            'city': widgets.TextInput(attrs ={'class': 'form-control'}),
            #'country': widgets.Select(choices =listi, attrs ={'class': 'form-control'}),
            #!!!!!MUNA EFTIR AÐ GERA: Country (displayed as a <select> HTML element)!!!!
            'postalCode': widgets.NumberInput(attrs={'class': 'form-control'})
        }