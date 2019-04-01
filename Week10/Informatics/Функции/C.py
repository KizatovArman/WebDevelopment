def my_xor(x,y):
    if(x==1 and y==0) or (x==0 and y==1):
        return 1
    else:
        return 0


a = [int(z) for z in input().split()]
a1 = int(a[0])
a2 = int(a[1])

print(my_xor(a1,a2))