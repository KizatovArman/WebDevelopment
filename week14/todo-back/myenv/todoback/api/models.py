from django.db import models
from datetime import datetime,timedelta
from django.contrib.auth.models import User


class TaskListManager(models.Manager):
    def for_user(self, user):
        return self.filter(created_by=user).order_by('name')


class TaskList(models.Model):
    name = models.CharField(max_length=100)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, default=2)#=None, null=True

    objects = TaskListManager()

    class Meta:
        verbose_name = 'TaskList'
        verbose_name_plural = 'TaskLists'

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Task(models.Model):
    name = models.CharField(max_length=250)
    created_at = models.DateTimeField(default=datetime.now(), blank=True)
    due_on = datetime.now() + timedelta(days=1)
    status = models.CharField(max_length=250)
    task_list = models.ForeignKey(TaskList,
                                  on_delete=models.CASCADE,
                                  related_name='tasks')

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'created_at': self.created_at,
            'due_on': self.due_on,
            'status': self.status,
        }

