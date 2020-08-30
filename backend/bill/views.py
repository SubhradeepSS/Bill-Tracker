from django.shortcuts import render
from rest_framework import generics, mixins

from .models import Bill
from .serializers import BillSerializer

# Create your views here.
class BillView(generics.ListCreateAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
