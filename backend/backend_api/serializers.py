from rest_framework import serializers
from backend_api.models import Artist

# Convertendo o modelo de artista para JSON ou XML para ser mais fácilmente apresentando no frontend
class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'