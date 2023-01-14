from django.urls import path
from django.views.generic import TemplateView

app_name = 'mtg'

urlpatterns = [
    path('', TemplateView.as_view(template_name='mtg/index.html'))
]