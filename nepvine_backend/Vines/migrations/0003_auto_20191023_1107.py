# Generated by Django 2.2.6 on 2019-10-23 05:22

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Vines', '0002_vines_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vines',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
    ]
