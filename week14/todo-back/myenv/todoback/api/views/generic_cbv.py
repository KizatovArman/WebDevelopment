from api.models import TaskList, Task
from api.serializers import TaskListSerializer1, TasksSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework import filters
from django.http import Http404
from django.shortcuts import get_object_or_404
from django_filters.rest_framework import DjangoFilterBackend
from api.filters import TaskFilter
from rest_framework.pagination import PageNumberPagination, LimitOffsetPagination

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
    serializer_class = TaskListSerializer1
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        # print(self.request)
        # return TaskList.objects.filter(created_by=self.request.user)'
        return TaskList.objects.for_user(self.request.user)


    # def get_serializer_class(self):
    #     return TaskListSerializer1

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class TasklistsInfo(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer1


class TasklistsTasksList(generics.ListCreateAPIView):
    serializer_class = TasksSerializer
    pagination_class = LimitOffsetPagination #PageNumberPagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)

    # Todo DjangoFilterBackend
    # filterset_fields = ('name')#строго равно
    filterset_class = TaskFilter#чтобы мог делать больше чем просто равно

    # Todo SearchFilter
    search_fields = ('name', 'status')

    # Todo OrderingFilter
    ordering_fields = ('name', 'status')
    ordering = ('-name',) #по какой колонке делает ордеринг, - for reverse ordering


    def get_queryset(self):
        tasklist = get_object_or_404(TaskList, id=self.kwargs.get('pk'))
        # try:
        #     tasklist = TaskList.objects.get(id=self.kwargs.get('pk'))
        # except TaskList.DoesNotExist:
        #     raise Http404
        # Task.objects.filter(name=)
        #name__contains=, name__endswith=, name__exact=,
        #name__icontains=, name__iendswith=,name__iexact=,
        #name__in=, name__iregex=, name__isnull=, name__istartswith= these are lookup fields

        queryset = tasklist.tasks.all()

        # Todo Query params
        # name = self.request.query_params.get('name', None)
        # status = self.request.query_params.get('status', None)
        # if name is not None and status is not None:
        #     queryset = queryset.filter(name=name).filter(status=status)
        return queryset
