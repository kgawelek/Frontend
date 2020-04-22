from django.db import models

# Create your models here.
class Film(models.Model):
    tytul = models.CharField(max_length=32)

