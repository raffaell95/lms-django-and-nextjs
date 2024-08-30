from django.contrib import admin

from src.core.models.aluno import Aluno
from src.core.models.curso import Curso

# Register your models here.
class CursoAdmin(admin.ModelAdmin):
    pass

class AlunoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Curso, CursoAdmin)
admin.site.register(Aluno, AlunoAdmin)