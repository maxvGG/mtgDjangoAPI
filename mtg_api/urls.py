from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns

from . import views

app_name = 'mtg_api'

urlpatterns = [
    path('', views.ApiOverview.as_view(), name="api-overview"),
    path('card-name/<str:pk>/', views.CardByName.as_view(), name="card-detail"),
    path('random-card/', views.RandomCard.as_view(), name='random-card'),
    path('set/<str:pk>', views.SearchCardsFromSet.as_view(), name='card-set')
]

