from django.urls import path
from articles.views import ArticleDetailView, ArticleListView, ArticleViewed
urlpatterns = [
    path('<int:pk>/', ArticleDetailView.as_view()),
    path('<int:pk>/view/', ArticleViewed.as_view()),
    path('', ArticleListView.as_view()),
]
