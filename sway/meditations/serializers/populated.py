from rest_framework import serializers
from jwt_auth.serializers.common import UserSerializer
from .common import MeditationSerializer
from jwt_auth.models import User


class PopulatedMeditationSerializer(MeditationSerializer):
    favourited_by = UserSerializer(many=True)
