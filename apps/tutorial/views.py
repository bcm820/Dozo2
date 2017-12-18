
# Import models and serializers
from django.contrib.auth.models import User, Permission
from .models import *
from .serializers import *

# Import viewsets
from rest_framework import viewsets

"""
Rather than write multiple views we're grouping together all the common behavior into classes called ViewSets.
"""

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('start_date')
    serializer_class = ProjectSerializer

class ProjectGroupViewSet(viewsets.ModelViewSet):
    queryset = ProjectGroup.objects.all()
    serializer_class = ProjectGroupSerializer