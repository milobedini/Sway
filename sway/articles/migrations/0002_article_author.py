# Generated by Django 3.2.9 on 2021-12-06 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='author',
            field=models.CharField(default='Milo Bedini', max_length=30),
            preserve_default=False,
        ),
    ]
