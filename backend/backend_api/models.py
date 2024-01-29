from django.db import models

#Criando o modelo de artista com os campos necessários
class Artist(models.Model):
    modalidadeType = models.CharField(max_length=30)
    completeName = models.CharField(max_length=100)
    documentType = models.CharField(max_length=30)
    documentNumber = models.CharField(max_length=40)

    def __str__(self):
        return self.name
