from django.db import models

class Education(models.Model):
    school = models.CharField(max_length=255)
    degree = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField(blank=True)
    ordinal = models.IntegerField()

class Work(models.Model):
    company = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    years = models.CharField(max_length=25)
    description = models.TextField(blank=True)
    ordinal = models.IntegerField()

class Portofolio(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='uploads/', blank=True)
    url = models.URLField()
    ordinal = models.IntegerField()