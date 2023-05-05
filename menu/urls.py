from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="menu"),
    path('<int:id>', views.get_pizza_by_id, name="pizza-details")
]