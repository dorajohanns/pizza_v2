# Generated by Django 4.2.1 on 2023-05-11 12:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('offers', '0002_offer'),
    ]

    operations = [
        migrations.CreateModel(
            name='OfferImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=255)),
                ('offer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='offers.offers')),
            ],
        ),
    ]
