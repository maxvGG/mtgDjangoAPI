from django.urls import path
from . import views

app_name = 'mtg_api'

urlpatterns = [
    path('', views.api_overview, name="api-overview"),
    path('card-name/<str:pk>/', views.card_by_name, name="card-detail"),
    path('random-card/', views.random_card, name='random-card'),
    path('set/<str:pk>', views.card_by_set, name='card-set')
]
