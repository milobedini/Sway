from django.urls import path
from .views import MeditationDetailView, MeditationListView

urlpatterns = [
    path('<int:pk>/', MeditationDetailView.as_view()),
    path('', MeditationListView.as_view()),
]
