from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Article
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from articles.serializers.common import ArticleSerializer

# Create your views here.


class ArticleListView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request):
        articles = Article.objects.all()
        serialized_articles = ArticleSerializer(
            articles, many=True)
        return Response(serialized_articles.data, status=status.HTTP_200_OK)


class ArticleDetailView(APIView):
    # permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        article = Article.objects.get(id=pk)
        serialized_article = ArticleSerializer(article)
        return Response(serialized_article.data, status=status.HTTP_200_OK)
