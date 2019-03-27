import math
a = int(input())
b = int(input())

for x in range(a, b+1):
    square = int(math.sqrt(float(x)))
    if square == 0 or square == 1:
        continue
    if square*square == x:
        print(x)