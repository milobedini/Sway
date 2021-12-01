from django.db import models

# Create your models here.


class Article(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)
    views = models.IntegerField(default=0)
    text = models.TextField()

    def __str__(self):
        return "Article: " + self.title
