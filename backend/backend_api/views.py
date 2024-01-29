from django.shortcuts import render
from .models import Artist
from .serializers import ArtistSerializer
from rest_framework import viewsets

# Criando a viewset para o modelo de artista para que seja feita a formatação para os templates
class ArtistViewSet(viewsets.ModelViewSet):
    serializer_class = ArtistSerializer
    queryset = Artist.objects.all()