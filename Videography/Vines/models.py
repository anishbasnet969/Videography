from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Vines(models.Model):
    title = models.CharField(max_length=120,null=True)
    clip = models.FileField(upload_to="clips/")
    thumbnail = models.ImageField(upload_to="thumbnails/")
    user = models.ForeignKey(User,on_delete=models.CASCADE,null=True) 
    published_at = models.DateTimeField(auto_now_add=True)