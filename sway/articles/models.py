from django.db import models

# Create your models here.


class Article(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)
    views = models.IntegerField(default=0)
    text = models.TextField()
    author = models.ForeignKey(
        "jwt_auth.User", related_name="author", on_delete=models.CASCADE)

    def __str__(self):
        return "Article: " + self.title
