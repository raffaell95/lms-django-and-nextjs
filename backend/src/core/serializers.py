from src.core.models.curso import Curso
from src.core.models.aluno import Aluno
from rest_framework import serializers
from django.contrib.auth.models import User

class AulaResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    titulo = serializers.CharField(max_length=100)
    descricao = serializers.CharField()
    url_video = serializers.URLField()
    carga_hora = serializers.CharField()


class CursoResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    nome = serializers.CharField(max_length=100)
    descricao = serializers.CharField()
    is_active = serializers.BooleanField()
    aulas = AulaResponseSerializer(many=True, read_only=True)


class UserResponseSerializer(serializers.Serializer):
    username = serializers.CharField()
    email = serializers.CharField()

class AlunoResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    perfil = UserResponseSerializer(read_only=True)
    matricula = serializers.CharField()
    data_nascimento = serializers.CharField()
    cursos = CursoResponseSerializer(many=True, read_only=True)