from django.contrib.humanize.templatetags.humanize import naturaltime
from rest_framework import serializers
from ..models import Article
from django.contrib.humanize.templatetags.humanize import naturaltime


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = "__all__"
