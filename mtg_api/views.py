from rest_framework.response import Response
from rest_framework.views import APIView
import requests


# Create your views here.
class ApiOverview(APIView):
    """
    List api overview
    """
    def get(self, request):
        api_urls = {
            'Card by name': '/api/card-name/<Card name>/',
            'Random card': '/api/random-card/',
            'Cards from the same set': '/api/set/<set abbreviation>/'
        }
        return Response(api_urls)


class CardByName(APIView):
    """
    :param pk: card name
    :return: card info in JSON format
    """
    def get(self, request, pk):
        card = requests.get('https://api.scryfall.com/cards/named?fuzzy=' + pk)
        data = card.json()
        return Response({
            "name": data['name'],
            "url": data['scryfall_uri'],
            "image": data['image_uris']["normal"],
        })


class RandomCard(APIView):
    def get(self, request):
        card = requests.get('https://api.scryfall.com/cards/random')
        data = card.json()
        return Response({
            "name": data['name'],
            "url": data['scryfall_uri'],
            "image": data['image_uris']["normal"],
        })


class SearchCardsFromSet(APIView):
    def get(self, request, pk):
        card = requests.get('https://api.scryfall.com/cards/search?q=(set:' + pk + ')')
        data = card.json()
        return Response(data)

