import linecache


print('hello world!')
print('wow i finally did it')
# you will not believe how hard it was to install python

##1looping a triangle
triangle = '#'
while len(triangle) <= 7:
    print(triangle)
    triangle += '#'

##2 "FizzBuzz"
num = 0
while num < 100:
    num += 1
    if num % 3 == 0 and num % 5 == 0:
        print('FizzBuzz')
    elif num % 3 == 0:
        print('Fizz')
    elif num % 5 == 0:
        print ('Buzz')
    else:
        print(num)

##3 ChessBoard Function
def ChessBoard(lineGoal):
    lineTotal = 0
    newLineGoal = 0
    char1 = '#'
    char2 = ' '
    charLine1 = ''
    charLine2 = ''

    while len(charLine1) < lineGoal:
        charLine1 += char1 + char2
        if len(charLine1) > lineGoal:
            charLine1 = charLine1[:-1]
    while len(charLine2) < lineGoal:
        charLine2 += char2 + char1
        if len(charLine2) > lineGoal:
            charLine2 = charLine2[:-1]

    while lineTotal < lineGoal:
        if lineGoal % 2 == 0:
            print(charLine1)
            print(charLine2)
            lineTotal += 2
        else:
            newLineGoal = lineGoal
            newLineGoal -= 1
            if lineTotal < newLineGoal:
                lineTotal += 2
                print(charLine1)
                print(charLine2)
            else:
                print(charLine1)
                break

ChessBoard(7)