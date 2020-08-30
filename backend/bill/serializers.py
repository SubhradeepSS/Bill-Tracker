from rest_framework import serializers
from .models import Bill

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = (
            'bill_no', 'bill_for', 'date_paid', 'amount'
        )