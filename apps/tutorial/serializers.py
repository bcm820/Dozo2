from rest_framework import serializers
from django.contrib.auth.models import User, Group
from .models import *

"""
Override RelatedField with custom relational fields
"""
class TitleField(serializers.RelatedField):

    def to_representation(self, model):
        return '{}'.format(model.title)

    def to_internal_value(self, model):
        try:
            try:
                return model.objects.get(title=model.title)
            except KeyError:
                raise serializers.ValidationError(
                    'Title is a required field.'
                )
            except ValueError:
                raise serializers.ValidationError(
                    'Title must be a string.'
                )
        except Obj.DoesNotExist:
            raise serializers.ValidationError(
            'Obj does not exist.'
            )

class NameField(serializers.RelatedField):
    def to_representation(self, model):
        return '{} {}'.format(model.first_name, model.last_name)


class UserSerializer(serializers.HyperlinkedModelSerializer):
    teams = TitleField(many=True)
    teams_led = TitleField(many=True)
    managed_projects = TitleField(many=True)
    assigned_projects = TitleField(many=True)
    
    class Meta:
        model = User
        fields = (
            'url',
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'date_joined',
            'last_login',
            'teams',
            'teams_led',
            'assigned_projects',
            'managed_projects',
        )

class ProjectGroupSerializer(serializers.HyperlinkedModelSerializer):
    projects = TitleField(many=True)

    class Meta:
        model = ProjectGroup
        fields = ('__all__')

class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    project_group = TitleField()
    team = TitleField()
    manager = NameField()
    members = NameField(many=True)
    
    class Meta:
        model = Project
        fields = ('__all__')

class TeamSerializer(serializers.HyperlinkedModelSerializer):
    lead = NameField()
    members = NameField(many=True)
    projects = TitleField(many=True)

    class Meta:
        model = Team
        fields = (
            'url',
            'id',
            'title',
            'description',
            'lead',
            'members',
            'projects'
        )