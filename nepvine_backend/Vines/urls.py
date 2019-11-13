from django.urls import path
from .views import VineView,VineDetailView

urlpatterns = [
    path('vines/', VineView.as_view(), name='vines_list'),
    path('vines/<int:id>/',VineDetailView.as_view()),
]