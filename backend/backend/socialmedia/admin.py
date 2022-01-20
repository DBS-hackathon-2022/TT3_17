from django.contrib import admin
from .models import (USER, POST, LIKED_POST,POST_COMMENT, LIKED_POST2,POST_COMMENT2)

# Register your models here.
admin.site.register(USER)
admin.site.register(POST)
admin.site.register(LIKED_POST)
admin.site.register(POST_COMMENT)
admin.site.register(LIKED_POST2)
admin.site.register(POST_COMMENT2)
