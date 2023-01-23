from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Education, Work, Portofolio

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = '__all__'

class WorkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Work
        fields = '__all__'

class PortofolioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Portofolio
        fields = '__all__'