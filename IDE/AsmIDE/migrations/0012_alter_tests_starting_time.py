# Generated by Django 3.2 on 2021-04-24 02:04

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('AsmIDE', '0011_auto_20210424_0202'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tests',
            name='starting_time',
            field=models.DateTimeField(default=datetime.datetime(2021, 4, 24, 2, 4, 17, 484478, tzinfo=utc)),
        ),
    ]