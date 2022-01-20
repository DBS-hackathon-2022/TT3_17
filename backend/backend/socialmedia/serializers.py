from rest_framework import serializers
from .models import (USER, POST, LIKED_POST,POST_COMMENT)

class UserSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
		model = USER
		fields = ("User_ID", "Name","Age", "Birthday","Email","Phone","City","Country")

class PostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
			model = POST
			fields = ("Post_ID", "Post_Title","Post_Description","Post_image")

class LikedPostSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
			model = LIKED_POST
			fields = ("User_ID", "Post_ID")

class PostCommentSerializer(serializers.HyperlinkedModelSerializer):
	class Meta:
			model = POST_COMMENT
			fields = ("Comment_ID", "User_ID","Post_ID","Comment")