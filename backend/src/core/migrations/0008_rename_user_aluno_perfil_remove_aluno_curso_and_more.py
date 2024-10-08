# Generated by Django 5.1 on 2024-08-31 01:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_alter_aluno_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='aluno',
            old_name='user',
            new_name='perfil',
        ),
        migrations.RemoveField(
            model_name='aluno',
            name='curso',
        ),
        migrations.AddField(
            model_name='aluno',
            name='cursos',
            field=models.ManyToManyField(blank=True, to='core.curso'),
        ),
    ]
