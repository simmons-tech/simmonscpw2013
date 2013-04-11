from django.db import models

# Create your models here.
class TourReq(models.Model):
    req_time = models.DateTimeField('time requested')
    claimed = models.BooleanField('claimed')
