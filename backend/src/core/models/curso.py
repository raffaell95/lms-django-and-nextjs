from uuid import uuid4
from django.db import models


class Curso(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    is_active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.nome