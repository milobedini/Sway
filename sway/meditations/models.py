from django.db import models

# Create your models here.


class Meditation(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    audio = models.CharField(max_length=600)
    category = models.CharField(max_length=100)
    # favourited_by = models.ForeignKey(
    #     "jwt_auth.User", related_name="favourites", on_delete=models.PROTECT)

    def __str__(self):
        return "Meditation " + self.name
