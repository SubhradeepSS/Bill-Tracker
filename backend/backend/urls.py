from django.contrib import admin
from django.urls import path

from bill.views import BillView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', BillView.as_view(), name='view_bills'),
]