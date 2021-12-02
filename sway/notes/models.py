from django.db import models

# Create your models here.


class Note(models.Model):
    date = models.DateField(auto_now_add=True)
    text = models.TextField()
    owner = models.ForeignKey(
        "jwt_auth.User", related_name="notes", on_delete=models.CASCADE)
