from django.http import JsonResponse
from .models import TaskList
from .models import Task


def tasklist_list(request):
    tasklists = TaskList.objects.all()
    json_tasklists = [tl.to_json() for tl in tasklists]
    return JsonResponse(json_tasklists, safe=False)


def tasklists_info(request,pk):
    try:
        tasklist_item = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(tasklist_item.to_json())

def tasklist_task(request, pk):
    try:
        tasklist_item = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    tasks = tasklist_item.task_set.all()
    json_tasks = [ts.to_json() for ts in tasks]
    return JsonResponse(json_tasks, safe=False)

