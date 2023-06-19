# example/views.py
from datetime import datetime
from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    now = datetime.now()
   
    return render(request, 'index.html')