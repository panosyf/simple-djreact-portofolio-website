# Generated by Django 4.1.5 on 2023-01-23 21:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='portofolio',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='portofolio',
            name='image',
            field=models.ImageField(blank=True, upload_to='uploads/'),
        ),
        migrations.AlterField(
            model_name='work',
            name='description',
            field=models.TextField(blank=True),
        ),
    ]
