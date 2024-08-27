from django.shortcuts import render
from src.core.serializers import CursoResponseSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.request import Request
from src.core.models.curso import Curso
from rest_framework.status import HTTP_200_OK

# Create your views here.
class CursoViewSet(viewsets.ViewSet):

    def list(self, request: Request) -> Response:
        queryset = Curso.objects.all()
        serializer = CursoResponseSerializer(queryset, many=True)

        return Response(status=HTTP_200_OK, data=serializer.data)