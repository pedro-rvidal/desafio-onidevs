# Desafio Onidevs

<!--ts-->
   * Participante: Pedro Ramos Vidal
<!--te-->

## Sugestão de inicialização do projeto:

Após baixar todas as dependências necessárias no arquivo `requirements.txt`, entrar na pasta com os arquivos backend:
```
cd backend
```
Estando na pasta, é necessário iniciar o projeto ativando o ambiente virtual com o comando:
```
env\Scripts\activate
```
E agora é possível executar o servidor e inserir dados na API com o comando:
```
python manage.py runserver
```
OBS: O servidor inicial apenas com o ip local é necessário inserir /backend_api/artist/ ao final do URL.


Agora com o servidor e a API rodando é necessário iniciar o frontend para que seja feito a criação de artistas, vizualização e edição, em outro CMD, entre na pasta frontend
```
cd frontend
```
E inicie o projeto com:
```
npm start
```

Após isso o projeto estará funcionado e sendo possivel a gestão de artistas e também a alimentação da API com os dados inseridos na página criada na pasta `frontend`.
