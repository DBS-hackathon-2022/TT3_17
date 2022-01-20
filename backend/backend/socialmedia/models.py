# todos/models.py
from django.db import models


class USER(models.Model):
    User_ID = models.AutoField(primary_key = True)
    Name = models.CharField(max_length = 200)
    Age = models.CharField(max_length = 200)
    Birthday = models.CharField(max_length = 200)
    Email = models.CharField(max_length=200)
    Phone = models.CharField(max_length = 200)
    City = models.CharField(max_length=200)
    Country = models.CharField(max_length = 200)
    
    def __int__(self):
        """A string representation of the model."""
        return self.User_ID


class POST(models.Model):
    Post_ID = models.AutoField(primary_key = True)
    Post_Title = models.CharField(max_length = 200)
    Post_Description = models.CharField(max_length = 200)
    Post_image = models.CharField(max_length=200)
    
    def __int__(self):
        """A string representation of the model."""
        return self.Post_ID

class LIKED_POST(models.Model):
    User_ID = models.ForeignKey(USER, on_delete=models.CASCADE)
    Post_ID = models.ForeignKey(POST, on_delete=models.CASCADE)
    
    
    def __int__(self):
        """A string representation of the model."""
        return self.User_ID

class POST_COMMENT(models.Model):
    Comment_ID = models.AutoField(primary_key = True)
    User_ID = models.ForeignKey(USER, on_delete=models.CASCADE)
    Post_ID = models.ForeignKey(POST, on_delete=models.CASCADE)
    Comment = models.CharField(max_length=200)
    
    
    def __int__(self):
        """A string representation of the model."""
        return self.Comment_ID
