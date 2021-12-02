from rest_framework import serializers
from jwt_auth.serializers.common import UserSerializer
from .common import MeditationSerializer


class PopulatedMeditationSerializer(MeditationSerializer):
    user_set = UserSerializer(read_only=True, many=True)
