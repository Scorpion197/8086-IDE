# Generated by Django 3.2 on 2021-05-18 17:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AsmIDE', '0022_auto_20210518_1657'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='time_spent',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='tests',
            name='starting_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 5, 18, 17, 24, 4, 226311)),
        ),
    ]
