from rest_framework import serializers

class CursoResponseSerializer(serializers.Serializer):
    id = serializers.UUIDField()
    nome = serializers.CharField(max_length=100)
    descricao = serializers.CharField()
    is_active = serializers.BooleanField()