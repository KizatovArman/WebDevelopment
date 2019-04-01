n, m = map(int,input().split())
for i in range(1,n,2):
    print(int((m-3*i)/2)*'-'+(i*'.|.')+int((m-3*i)/2)*'-')
print(int((m-7)/2)*'-'+'WELCOME'+int((m-7)/2)*'-')
for i in range(n-2,-1,-2):
    print(int((m-3*i)/2)*'-'+(i*'.|.')+int((m-3*i)/2)*'-')