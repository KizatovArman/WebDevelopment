from api.models import TaskList
from api.serializers import TaskListSerializer1
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


from rest_framework import mixins

# class TasklistList(generics.ListAPIView):
#     queryset = TaskList.objects.all()
#     serializer_class = TaskListSerializer1

    # def get_queryset(self):
    #     return TaskListSerializer1.objects.all()
    #
    # def get_serializer_class(self):
    #     return TaskListSerializer1

# class TasklistCreate(generics.ListAPIView):
#     queryset = TaskList.objects.all()
#     serializer_class = TaskListSerializer1

# class TasklistList2(generics.ListCreateAPIView):
#     queryset = TaskList.objects.all()
#     serializer_class = TaskListSerializer1
#     http_method_names = ['get',]

class TasklistList(generics.ListCreateAPIView):
    # queryset = TaskList.objects.all()
    # serializer_class = TaskListSerializer1
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        # print(self.request)
        # return TaskList.objects.filter(created_by=self.request.user)
        return TaskList.objects.for_user(self.request.user)


    def get_serializer_class(self):
        return TaskListSerializer1

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class TasklistsInfo(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer1
