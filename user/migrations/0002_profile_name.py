# Generated by Django 4.2.1 on 2023-05-11 14:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='name',
            field=models.CharField(default=1, max_length=999),
            preserve_default=False,
        ),
    ]