from rest_framework import serializers
from .models import TaskList
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


class TaskListSerializer1(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()
    created_by = UserSerializer(read_only=True)
    class Meta:
        model = TaskList
        fields = ('id', 'name', 'created_by',)


class TasksSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)
    created_at = serializers.DateTimeField()
    due_on = serializers.DateTimeField()
    status = serializers.CharField()
    task_list = TaskListSerializer0()


