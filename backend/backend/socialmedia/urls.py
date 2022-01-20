from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'USERS', views.UserViewSet, basename = 'USERS')
router.register(r'POST', views.PostViewSet, basename='POST')
router.register(r'LIKED_POST', views.LikedPostViewSet, basename = 'LIKED_POST')
router.register(r'POST_COMMENT', views.PostCommentViewSet, basename='POST_COMMENT')

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]