from django.db import models
from datetime import timedelta

class Team(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    
    lead = models.ForeignKey(
        'auth.User', related_name='teams_led',
        null=True, on_delete=models.SET_NULL)

    members = models.ManyToManyField(
        'auth.User', related_name='teams')

    def __str__(self):
        return self.title


class ProjectGroup(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    shortest = models.DurationField(default=timedelta())
    longest = models.DurationField(default=timedelta())
    avg_duration = models.DurationField(default=timedelta())

    def __str__(self):
        return self.title


class Project(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()

    target_duration = models.DurationField(default=timedelta())
    actual_duration = models.DurationField(default=timedelta())
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField(
        default=None, blank=True, null=True)

    project_group = models.ForeignKey(
        ProjectGroup, related_name='projects',
        null=True, on_delete=models.SET_NULL)

    team = models.ForeignKey(
        Team, related_name='projects',
        null=True, on_delete=models.SET_NULL)  

    manager = models.ForeignKey(
        'auth.User', related_name='managed_projects',
        on_delete=models.CASCADE)

    members = models.ManyToManyField(
        'auth.User', related_name='assigned_projects')

    class Meta:
        ordering = ('start_date',)

    def __str__(self):
        return self.title



"""
To create users in Django:
user = User.objects.create_user('first_name', 'email', 'pw')
At this point, user is already saved with hashed pw
You can change other fields, but must save again after:
user.last_name = 'last_name'
user.save()

To update a user's password:
u.set_password('new password')
u.save()
"""