from django.db import models

class Project(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=100)
    description = models.TextField()

    class Meta:
        ordering = ('created',)