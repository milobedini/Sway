from rest_framework import serializers
from jwt_auth.serializers.common import UserSerializer
from .common import MeditationSerializer
from jwt_auth.models import User
from ..models import Meditation


class FavouriteMeditationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meditation
        favourited_by = UserSerializer(many=True)
        fields = ('id', 'favourited_by', 'name',
                  'description', 'audio', 'category')
