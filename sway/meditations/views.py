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
            # print(user_to_add)
            # user_id = request.user.id
            request.data["owner"] = request.user.id
            request.data["name"] = med_to_fav.name
            request.data["description"] = med_to_fav.description
            request.data["audio"] = med_to_fav.audio
            request.data["category"] = med_to_fav.category

        except Meditation.DoesNotExist:
            raise NotFound(detail="Meditation not found")
        serialized_meditation = PopulatedMeditationSerializer(
            med_to_fav, data=request.data)
        if serialized_meditation.is_valid():
            serialized_meditation.save()
            return Response(serialized_meditation.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(serialized_meditation.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
