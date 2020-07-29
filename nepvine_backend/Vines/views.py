from .serializers import VineSerializer
from .models import Vines
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from django.http import HttpResponse

class VineView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        vines = Vines.objects.all()
        serializer = VineSerializer(vines, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = VineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=201)
        return Response(serializer.errors,status=400)

class VineDetailView(APIView):

    def get_object(self,id):
        try:
            return Vines.objects.get(id=id)
        except Vines.DoesNotExist:
            return Response({"error":"Given post is not found."}, status=404)

    def get(self, request, id=None):
        instance = self.get_object(id)
        serializer = VineSerializer(instance)
        return Response(serializer.data)

    def put(self, request, id=None):
        instance = self.get_object(id=id)
        u_name = instance.user.username
        serializer =  VineSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=200,username=u_name)
        return Response(serializer.errors, status=400)
    
    def delete(self, request, id=None):
        instance = self.get_object(id=id)
        instance.delete()
        return HttpResponse(status=204)