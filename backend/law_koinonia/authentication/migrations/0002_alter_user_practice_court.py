# Generated by Django 4.1.1 on 2022-11-25 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='practice_court',
            field=models.BooleanField(blank=True, null=True),
        ),
    ]