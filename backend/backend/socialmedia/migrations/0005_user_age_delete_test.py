# Generated by Django 4.0.1 on 2022-01-20 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('socialmedia', '0004_test'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='Age',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='TEST',
        ),
    ]
