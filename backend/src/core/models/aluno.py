from uuid import uuid4
from django.db import models
from django.contrib.auth.models import User
from src.core.models.curso import Curso


class Aluno(models.Model):
    perfil = models.OneToOneField(User, on_delete=models.CASCADE)
    matricula = models.CharField(max_length=100)
    data_nascimento = models.TextField()
    cursos = models.ManyToManyField(Curso, blank=True)



    def __str__(self) -> str:
        return f'{self.perfil.username}'