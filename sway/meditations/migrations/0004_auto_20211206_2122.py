# Generated by Django 3.2.9 on 2021-12-06 21:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('meditations', '0003_meditation_sessions'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meditation',
            name='minutes',
        ),
        migrations.RemoveField(
            model_name='meditation',
            name='sessions',
        ),
    ]
