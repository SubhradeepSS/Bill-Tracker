from django.db import models

# Create your models here.
class Bill(models.Model):
    bill_no = models.IntegerField()
    bill_for = models.CharField(max_length=20)
    date_paid = models.DateField()
    amount = models.IntegerField()

    def __str__(self):
        return str(self.bill_no)