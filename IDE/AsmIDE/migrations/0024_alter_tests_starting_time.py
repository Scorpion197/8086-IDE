# Generated by Django 3.2 on 2021-05-18 17:27

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('AsmIDE', '0023_auto_20210518_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tests',
            name='starting_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 5, 18, 17, 27, 29, 949105)),
        ),
    ]
