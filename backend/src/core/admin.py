from django.contrib import admin

from src.core.models.curso import Curso

# Register your models here.
class CursoAdmin(admin.ModelAdmin):
    pass

admin.site.register(Curso, CursoAdmin)