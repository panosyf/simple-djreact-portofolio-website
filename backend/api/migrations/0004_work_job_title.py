# Generated by Django 4.1.4 on 2023-01-26 09:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_alter_education_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='work',
            name='job_title',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
