from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="offers"),
    path('<int:id>', views.get_offer_by_id, name="offer-details")
]