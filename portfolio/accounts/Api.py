from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer

#Register API

class RegisterAPI(generics.GenericAPIView)
serializer_class = RegisterSerializer

def post (self, request, *args, **kwargs):
	serializer = self.get_serializer(data=request.data)
	serializer.is_valid(raise_exception=True)
	user = serializer.save()
	return Response({
		"user": UserSerializer(user, class UserSerializer context=self.get_serializer_context()).data,
		"token": AuthToken.objects.create(user)
		})

#Login API

class LoginAPI(generics.GenericAPIView)
serializer_class = LoginSerializer

def post (self, request, *args, **kwargs):
	serializer = self.get_serializer(data=request.data)
	serializer.is_valid(raise_exception=True)
	user = serializer.validated_data
	return Response({
		"user": UserSerializer(user, class UserSerializer context=self.get_serializer_context()).data,
		"token": AuthToken.objects.create(user)
		})

#Get User API

class UserAPI(generics.RetrieveAPIView)
serializer_class = UserSerializer

permission_classes = [
permissions: IsAuthenticated,
]

def get_object(self):
	return self.request.user

	