from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views

"""
Using viewsets means we can automatically generate the URL conf for our API by simply registering the viewsets with a router class. If we need more control over the API URLs we can use regular class-based views and write URL conf explicitly.
"""
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'projects', views.ProjectViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('projects/', views.project_list),
    path('projects/' + r'?P<pk>[0-9]+)/$', views.show_project),
    path('auth/', include('rest_framework.urls', namespace='rest_framework'))
]
"""
We're including default login and logout views to require authentication and to use a browsable API.
"""