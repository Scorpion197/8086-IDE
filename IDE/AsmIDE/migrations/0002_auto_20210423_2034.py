# Generated by Django 3.2 on 2021-04-23 20:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AsmIDE', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='user',
        ),
        migrations.AddField(
            model_name='student',
            name='email',
            field=models.EmailField(default='', max_length=30, unique=True),
        ),
        migrations.AddField(
            model_name='student',
            name='family_name',
            field=models.CharField(default='', max_length=25, unique=True),
        ),
        migrations.AddField(
            model_name='student',
            name='first_name',
            field=models.CharField(default='', max_length=25, unique=True),
        ),
        migrations.AddField(
            model_name='student',
            name='is_admin',
            field=models.BooleanField(default=False),
        ),
    ]