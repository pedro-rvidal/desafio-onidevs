from django.contrib import admin
from .models import Artist

# Registro do modelo de artista no admin do Django
class ArtistAdmin(admin.ModelAdmin):
    list = ('modalidadeType', 'completeName', 'documentType', 'documentNumber')

    admin.site.register(Artist)