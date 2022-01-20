from django.shortcuts import render
from rest_framework import viewsets

from .serializers import UserSerializer, PostSerializer,LikedPostSerializer,PostCommentSerializer
from .models import (USER, POST, LIKED_POST,POST_COMMENT)
# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
	queryset = USER.objects.all()
	serializer_class = UserSerializer

#class UserPostViewSet(viewsets.ModelViewSet):

class PostViewSet(viewsets.ModelViewSet):
	queryset = POST.objects.all()
	serializer_class = PostSerializer

class LikedPostViewSet(viewsets.ModelViewSet):
	queryset = LIKED_POST.objects.all()
	serializer_class = LikedPostSerializer

class PostCommentViewSet(viewsets.ModelViewSet):
	queryset = POST_COMMENT.objects.all()
	serializer_class = PostCommentSerializer
		
	def get_queryset(self):
		if self.request.method == 'GET':
			userid= self.request.query_params.get('user_id', None)
			if userid is not None:
				queryset = POST_COMMENT.objects.filter(User_ID = userid )
			else:
				queryset = POST_COMMENT.objects.all().order_by('?')
			return queryset

