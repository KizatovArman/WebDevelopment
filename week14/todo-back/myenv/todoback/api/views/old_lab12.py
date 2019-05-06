import json
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from api.models import TaskList
from api.serializers import TaskListSerializer0, TaskListSerializer1, TasksSerializer


@csrf_exempt
def tasklist_list(request):
    if request.method == 'GET':
        task_lists = TaskList.objects.all()
        serializer = TaskListSerializer1(task_lists, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)
    elif request.method == 'POST':
        body = json.loads(request.body)
        serializer = TaskListSerializer1(data=body)
        if serializer.is_valid():
            serializer.save() #It will use create function in serializer class beacuse it is POST request
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)
    return JsonResponse({'error': 'bad request'})
    # tasklists = TaskList.objects.all()
    # json_tasklists = [tl.to_json() for tl in tasklists]
    # return JsonResponse(json_tasklists, safe=False)
    # from lab 11


@csrf_exempt
def tasklists_info(request, pk):
    try:
        tasklist_item = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = TaskListSerializer0(tasklist_item)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = json.loads(request.body)
        serializer = TaskListSerializer0(instance=tasklist_item, data=data)
        if serializer.is_valid():
            serializer.save() #It will use update function in serializer class, because it is PUT request
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors)
    elif request.method == "DELETE":
        tasklist_item.delete()
        return JsonResponse({})
    return JsonResponse({'error': 'bad request'})


def tasklist_task(request, pk):
    try:
        tasklist_item = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    tasks = tasklist_item.tasks.all()
    serializer = TasksSerializer(tasks, many=True)
    return JsonResponse(serializer.data, safe=False)

