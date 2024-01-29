from backend_api.views import ArtistViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

#Aqui é feito o roteamento da API para ser usados os métodos HTTP
router = DefaultRouter()
router.register(r'artist', views.ArtistViewSet, basename='artist')
urlpatterns = router.urls