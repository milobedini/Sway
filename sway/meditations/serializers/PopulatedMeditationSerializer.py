from rest_framework import serializers
from jwt_auth.serializer import UserSerializer
from .MeditationSerializer import MeditationSerializer


class PopulatedMeditationSerializer(MeditationSerializer):
    user_set = UserSerializer(read_only=True, many=True)
