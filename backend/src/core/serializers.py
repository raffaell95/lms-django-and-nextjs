from src.core.models.curso import Curso
from src.core.models.aluno import Aluno
from rest_framework import serializers
from django.contrib.auth.models import User

class CursoResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    nome = serializers.CharField(max_length=100)
    descricao = serializers.CharField()
    is_active = serializers.BooleanField()

class AlunoResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    user = serializers.CharField()
    matricula = serializers.CharField()
    data_nascimento = serializers.CharField()
    curso = CursoResponseSerializer(read_only=True)