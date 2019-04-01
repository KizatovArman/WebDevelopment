a = list()
n = int(input())
s1 = input()
s2 = s1.split(' ')
counter = 0
'''for i in range(n):
    m = input()
    a.append(int(m))'''
s = ""
for i in range(0, len(s2)):
    if int(s2[i]) > 0:
        counter = counter + 1
print(counter)
