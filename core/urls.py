from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('mtg.urls', namespace='mtg')),
    path('api/', include('mtg_api.urls', namespace='mtg_api'))
]
