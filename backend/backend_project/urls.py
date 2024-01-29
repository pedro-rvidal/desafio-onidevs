from django.contrib import admin
from django.urls import path, include

#Definição das rotas da API
urlpatterns = [
    path('admin/', admin.site.urls),
    path('backend_api/', include('backend_api.urls'))
]
