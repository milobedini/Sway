from django.core.exceptions import PermissionDenied
from django.shortcuts import render
from django.http.response import HttpResponse
from rest_framework.exceptions import NotFound
from rest_framework.views import APIView
from rest_framework.views import Response
from rest_framework.views import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser

from jwt_auth.models import User
from jwt_auth.serializers.populated import PopulatedUserSerializer

from .models import Meditation
from .serializers.populated import PopulatedMeditationSerializer
from .serializers.common import MeditationSerializer
from .serializers.favourite import FavouriteMeditationSerializer

# Create your views here.


class MeditationListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request):
        meditations = Meditation.objects.all()
        serialized_meditations = PopulatedMeditationSerializer(
            meditations, many=True)
        return Response(serialized_meditations.data, status=status.HTTP_200_OK)


class MeditationDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, request, pk):
        meditation = Meditation.objects.get(id=pk)
        serialized_meditation = PopulatedMeditationSerializer(meditation)
        return Response(serialized_meditation.data, status=status.HTTP_200_OK)

    def put(self, request, pk):
        try:
            med_to_fav = Meditation.objects.get(pk=pk)
            print(request.data)
        except Meditation.DoesNotExist:
            raise NotFound(detail="Meditation not found")
        serialized_med = FavouriteMeditationSerializer(
            med_to_fav, data=request.data)
        if serialized_med.is_valid():
            serialized_med.save()
            return Response(serialized_med.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized_med.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
