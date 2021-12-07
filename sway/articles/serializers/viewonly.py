from rest_framework import serializers
from ..models import Article


class ArticleViewOnlySerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('views', )
