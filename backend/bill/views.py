from rest_framework import generics

from .models import Bill
from .serializers import BillSerializer

# Create your views here.
class BillListView(generics.ListCreateAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer


class BillView(generics.UpdateAPIView, generics.DestroyAPIView):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer
    lookup_field = 'bill_no'
