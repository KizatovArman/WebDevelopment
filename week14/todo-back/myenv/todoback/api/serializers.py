from rest_framework import serializers
from .models import TaskList, Task
from django.contrib.auth.models import User



class TaskListSerializer0(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        tasklist = TaskList(**validated_data)
        tasklist.save()
        return tasklist

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email')


class TasksSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    task_list_id = serializers.IntegerField(write_only=True) #когда хотим добавить или изменить

    class Meta:
        model = Task
        fields = ('id', 'name', 'status', 'task_list_id')


class TasksSerializer2(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)

    class Meta:
        model = Task
        fields = ('id', 'name', 'status')


class TaskListSerializer1(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_by = UserSerializer(read_only=True)
    tasks = TasksSerializer2(many=True) #related names another vaiant serializers.StringRelatedField(many=True)
    #one more serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = TaskList
        fields = ('id', 'name', 'created_by', 'tasks')

    def create(self, validated_data):#override
        tasks = validated_data.pop('tasks')#если удалил таски после этого вал дата то что осталось
        tasklist = TaskList.objects.create(**validated_data)
        for task in tasks:
            Task.objects.create(task_list=tasklist, **task)
        # arr = [Task(task_list=tasklist,**task) for task in tasks] #bulk method
        # Task.objects.bulk_create(arr)
        # for i in range(0, len(arr), 100):
        #     Task.objects.bulk_create(arr[i:i+100])

        return tasklist
