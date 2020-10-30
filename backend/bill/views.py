from django.shortcuts import render
from rest_framework import generics, mixins

from .models import Bill
from .serializers import BillSerializer

# Create your views here.
class BillListView(generics.ListCreateAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class BillView(generics.DestroyAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
    lookup_field = 'bill_no'