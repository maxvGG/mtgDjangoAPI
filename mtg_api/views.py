from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests


# Create your views here.

@api_view(['GET'])
def api_overview(request):
    """
    :return: an overview of all the different possible API endpoints
    """
    api_urls = {
        'Card by name': '/card-name/<Card name>/',
        'Random card': '/random-card/',
        'Cards from the same set': '/set/<set abbreviation>/'
    }

    return Response(api_urls)


@api_view(['GET'])
def search_card_by_name(request, pk):
    """
    :param pk: card name
    :return: card info in JSON format
    """
    # searches for a card
    card = requests.get('https://api.scryfall.com/cards/named?fuzzy=' + pk)
    data = card.json()
    return Response(data)


@api_view(['GET'])
def random_card(request):
    """
    :return: a random card from Scryfall in json format
    """
    card = requests.get('https://api.scryfall.com/cards/random')
    data = card.json()
    return Response({
        "name": data['name'],
        "url": data['scryfall_uri'],
        "image": data['image_uris']["normal"],
    })


@api_view(['GET'])
def search_cards_from_set(request, pk):
    """
    :param pk: set name
    :return: all the cards from the same set in JSON format
    """
    card = requests.get('https://api.scryfall.com/cards/search?q=(set:' + pk + ')')
    data = card.json()
    return Response(data)
