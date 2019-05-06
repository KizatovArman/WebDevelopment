from django_filters import rest_framework as filters
from api.models import Task

class TaskFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')#by default exact
    # min_price = filters.NumberFilter(field_name='price', lookup_expr='gte')field_name куда должен смотреть в базе
    # max_price = filters.NumberFilter(field_name='price', lookup_expr='lte')
    class Meta:
        model = Task
        fields = ('name',) #'price')
