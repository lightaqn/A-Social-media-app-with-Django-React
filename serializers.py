from rest_framework import serializers
from AIEs.models import AIE
from django.contrib.auth.models import User

# AIE Serializer
class AIESerializer(serializers.ModelSerializer):
    class Meta:
        model = AIE
        fields = '__all__'
        owner = models.ForeignKey(User, related_name="AIEs", on_delete=models.CASCADE, null=True)