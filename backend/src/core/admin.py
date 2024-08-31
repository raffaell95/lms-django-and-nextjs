from django.contrib import admin

from src.core.models.aluno import Aluno
from src.core.models.curso import Curso
from src.core.models.aula import Aula

# Register your models here.
class CursoAdmin(admin.ModelAdmin):
    pass

class AlunoAdmin(admin.ModelAdmin):
    pass

class AulaAdmin(admin.ModelAdmin):
    pass

admin.site.register(Curso, CursoAdmin)
admin.site.register(Aula, AulaAdmin)
admin.site.register(Aluno, AlunoAdmin)