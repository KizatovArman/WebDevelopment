from django.urls import path
from api import views

# urlpatterns = [
#     path('task_lists/', views.tasklist_list),
#     path('task_lists/<int:pk>/', views.tasklists_info),
#     path('task_lists/<int:pk>/tasks/', views.tasklist_task)
# ]

urlpatterns = [
    path('task_lists/', views.TasklistList.as_view()),
    path('task_lists/<int:pk>/', views.TasklistsInfo.as_view()),
    path('users/', views.UserList.as_view()),
    path('login/',views.login),
    path('logout/', views.logout),

    path('task_lists/<int:pk>/tasks/', views.tasklist_task)
]

