from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import secrets


@api_view(['POST'])
def register_view(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not username or not password:
        return Response({"error": "Eksik bilgi"}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({"error": "Bu kullanıcı zaten var"}, status=status.HTTP_400_BAD_REQUEST)

    user = User.objects.create_user(username=username, email=email, password=password)

    return Response({"message": "Kayıt başarılı"}, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def login_view(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is None:
        return Response({"error": "Kullanıcı adı veya şifre yanlış"}, status=status.HTTP_400_BAD_REQUEST)

    fake_token = secrets.token_hex(16)

    return Response({
        "message": "Giriş başarılı",
        "token": fake_token,
        "username": username
    }, status=status.HTTP_200_OK)


@api_view(['POST'])
def reset_password_view(request):
    email = request.data.get('email')

    if not User.objects.filter(email=email).exists():
        return Response({"error": "Böyle bir email yok"}, status=status.HTTP_404_NOT_FOUND)

    reset_code = secrets.token_hex(8)

    return Response({
        "message": "Şifre sıfırlama isteği alındı",
        "reset_code_demo": reset_code
    }, status=status.HTTP_200_OK)
