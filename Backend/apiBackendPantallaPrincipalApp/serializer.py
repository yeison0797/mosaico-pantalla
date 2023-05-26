
from rest_framework import serializers
from .models import *

class DependenciaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Dependencia     # El modelo al que pertenece este serializador
        fields = '__all__'  # Coje todos los campos del modelo 