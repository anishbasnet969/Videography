from rest_framework import serializers
from .models import Vines

class VineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vines
        fields = '__all__'
        read_only_fields = ('user', 'published_at')
        
