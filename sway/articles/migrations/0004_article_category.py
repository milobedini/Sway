# Generated by Django 3.2.9 on 2021-12-08 17:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0003_alter_article_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='category',
            field=models.CharField(default='Thread', max_length=30),
        ),
    ]