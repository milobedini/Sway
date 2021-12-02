from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
from .models import Note
from .serializers.populated import PopulatedNoteSerializer

# Create your views here.


class NoteListView(APIView):
    permission_classes = (IsAuthenticated, )

    def get(self, request):
        notes = Note.objects.all()
        notes = Note.objects.filter(owner_id=request.user.id)
        # f'{request.user}')
        # user_notes = Note.objects.get(owner["id"]==request.user)
        # user_notes = notes.owner.id = request.user.id
        serialized_notes = PopulatedNoteSerializer(notes, many=True)
        return Response(serialized_notes.data, status=status.HTTP_200_OK)
