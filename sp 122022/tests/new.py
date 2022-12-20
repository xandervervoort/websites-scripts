import time
def check():
    a = int(input("cash amount: "))
    money = []
    hoeveel = ["briefjes van 10", "briefjes van 5", "briefjes van 2", "briefjes van 1"]
    door10 = a // 10
    b = a % 10
    money.append(door10)

    door5 = b // 5
    c = b % 5
    money.append(door5)

    door2 = c // 2
    d = c % 2
    money.append(door2)

    door1 = d // 1
    e = d % 1
    money.append(door1)

    for i in money:
        if i == 0:
            time.sleep(0.01)
        else:
            print("u krijgt ", i, )


check()
