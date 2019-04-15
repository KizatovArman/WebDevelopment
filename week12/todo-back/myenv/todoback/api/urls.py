from django.urls import path
from . import views

urlpatterns = [
    path('task_lists/', views.tasklist_list),
    path('task_lists/<int:pk>/', views.tasklists_info),
    path('task_lists/<int:pk>/tasks/', views.tasklist_task)
]
