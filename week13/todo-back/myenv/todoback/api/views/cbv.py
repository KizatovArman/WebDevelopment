from api.models import TaskList
from api.serializers import TaskListSerializer1
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404

class TasklistList(APIView):
    def get(self,request):
        task_lists = TaskList.objects.all()
        serializer = TaskListSerializer1(task_lists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        # print(request.data)
        serializer = TaskListSerializer1(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

class TasklistsInfo(APIView):

    def get_object(self,pk):
        try:
            return True, TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            return False, Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, pk):
        have_found, result = self.get_object(pk)
        if have_found:
            serializer = TaskListSerializer1(result)
            return Response(serializer.data)
        return result

    def put(self,request,pk):
        have_found,result = self.get_object(pk)
        if have_found:
            serializer = TaskListSerializer1(instance=result, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors)
        return result

    def delete(self,request,pk):
        have_found, result = self.get_object(pk)
        if have_found:
            result.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return result

    # second variant
    # def get_object(self,pk):
    #     try:
    #         return TaskList.objects.get(id=pk)
    #     except TaskList.DoesNotExist:
    #         raise Http404
    #
    # def get(self, request, pk):
    #     result = self.get_object(pk)
    #     serializer = TaskListSerializer1(result)
    #     return Response(serializer.data)
    #
    # def put(self,request,pk):
    #     result = self.get_object(pk)
    #     serializer = TaskListSerializer1(instance=result, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data)
    #     return Response(serializer.errors)
    #
    # def delete(self,request,pk):
    #     result = self.get_object(pk)
    #     result.delete()
    #     return Response(status=status.HTTP_204_NO_CONTENT)
    #     
