from django.contrib import admin
from django.urls import path

from bill.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', BillListView.as_view(), name='view_bills'),
    path('<int:bill_no>', BillView.as_view(), name='view_bill'),
]