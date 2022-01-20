from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import (USER, POST, LIKED_POST,POST_COMMENT)

class UserSerializer(ModelSerializer):
	class Meta:
		model = USER
		fields = ("User_ID", "Name","Age", "Birthday","Email","Phone","City","Country")

class PostSerializer(ModelSerializer):
	class Meta:
			model = POST
			fields = ("Post_ID", "Post_Title","Post_Description","Post_image")



class LikedPostSerializer(ModelSerializer):
	class Meta:
			model = LIKED_POST
			fields = ("User_ID",
			 "Post_ID")


class PostCommentSerializer(ModelSerializer):
	#User_ID = UserSerializer(many=False, read_only=True)
	class Meta:
			model = POST_COMMENT
			fields = ("Comment_ID", "User_ID","Post_ID","Comment")