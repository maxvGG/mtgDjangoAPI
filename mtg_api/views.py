from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


# Create your views here.
@api_view(['GET'])
def api_overview(request):
    api_urls = {
        'Card by name': '/card-name/<Card name>/',
        'Random card': '/random-card/',
        'Cards from the same set': '/set/<set abbreviation>/'
    }

    return Response(api_urls)


@api_view(['GET'])
def search_card_by_name(request, pk):
    card = requests.get('https://api.scryfall.com/cards/named?fuzzy=' + pk)
    data = card.json()
    return Response(data)


@api_view(['GET'])
def random_card(request):
    card = requests.get('https://api.scryfall.com/cards/random')
    data = card.json()
    return Response(data)


@api_view(['GET'])
def search_cards_from_set(request, pk):
    card = requests.get('https://api.scryfall.com/cards/search?q=(set:' + pk + ')')
    data = card.json()
    return Response(data)
