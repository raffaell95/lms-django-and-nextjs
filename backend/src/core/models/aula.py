from uuid import uuid4
from django.db import models

from src.core.models.curso import Curso


class Aula(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    titulo = models.CharField(max_length=100)
    descricao = models.TextField()
    url_video = models.URLField()
    carga_hora = models.TextField()
    curso = models.ForeignKey('Curso', related_name='aulas', on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.titulo