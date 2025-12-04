from django.urls import path
from .views import register_view, login_view, reset_password_view

urlpatterns = [
    path('register/', register_view),
    path('login/', login_view),
    path('reset-password/', reset_password_view),
]
