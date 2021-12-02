from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.views import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser
from .models import Meditation
from .serializers.common import MeditationSerializer

# Create your views here.


class MeditationListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    # def post(self, request):
    #     new_meditation = MeditationSerializer(data=request.data)
    #     if new_meditation.is_valid():
    #         return Response(new_meditation.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(status=status.HTTP_422_UNPROCESSABLE_ENTITY)

    def get(self, request):
        meditations = Meditation.objects.all()
        serialized_meditations = MeditationSerializer(
            meditations, many=True)
        return Response(serialized_meditations.data, status=status.HTTP_200_OK)


class MeditationDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        meditation = Meditation.objects.get(id=pk)
        serialized_meditation = MeditationSerializer(meditation)
        return Response(serialized_meditation.data, status=status.HTTP_200_OK)
