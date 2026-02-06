from _io import StringIO
a=128522
print(chr(a)) # integer to String
b=ord("😊")
print(b) # String to integer

## Indexing in Python
a="Astarr"
print(a[0])
print(a[1])
print(a[2])
print(a[3])
print(a[4])
print(a[5])
print(a[-1])
print(a[-2])
print(a[-3])
print(a[-4])
print(a[-5])
print(a[-6])

# print(a[6]) ## Index out of range

## String Slicing
print(a[0:3]) # a[start,end,steps] chalega end-1 tak
print(a[::])

##type conversion
print(type(a))
x=13
print(type(x))
x=str(x)
print(type(x))

# str="Hello"
# str=int(str)
# print(type(str)) ## error aayega kyuki string me number nahi hai

## Boolean -> There are some truthy and some falsy values
# falsey -> False, 0, 0.0, "", [], {}, ()
# truthy -> True, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hello", [1], {1}, (1)


## Type of conversions
# 1. Implicit Type Conversion -> Python automatically converts the type of a variable
# Example
a=12
b=3
print(a/b)
# 2. Explicit Type Conversion -> Python requires the user to convert the type of a variable



## Input and output
# input() -> It is used to take input from the user
# print() -> It is used to print the output

name=input("Enter your name: ")
age=int (input("Enter your age: ")) ## By default input taken is as string
print("Name: ", name)
print("Age: ", age)

## Formatted String
print(f"Name: {name}, Age: {age}") 


# Operators
# 1. Arithemetic Operators
#    +, -, *, /, %, **, //
a=12
b=6
print(a+b)
print(a-b)
print(a*b)
print(a/b)
print(a%b)
print(a**b)
print(a//b)

# 2. Assignment Operators
#    =, +=, -=, *=, /=, %=, **=, //=
a=12
b=6
a+=b
print(a)
a-=b
print(a)
a*=b
print(a)
a/=b
print(a)
a%=b
print(a)
a**=b
print(a)
a//=b
print(a)

# 3. Comparison Operators
#    ==, !=, >, <, >=, <=
a=12
b=6
print(a==b)
print(a!=b)
print(a>b)
print(a<b)
print(a>=b)
print(a<=b)

## Comparison operators works with numbers.ArithmeticError
## But we can also use it with srings. 
## String willl be comparing the Ascii values of string.

print("Astarr"=="Astarr")

## logical operators
# and, or, not
print(12>6 and 6<12)
print(12>6 or 6<12)
print(not 12>6)
print((456==456)!=(235==236))
print(True and bool(0)) # False


# Conditional Statements
if 12>6:
    print("12 is greater than 6")
elif 12==6:
    print("12 is equal to 6")
else:
    print("12 is less than 6")


## Ternary Operator
print("12 is greater than 6") if 12>6 else print("12 is less than 6")

##Loops
# 1. For loops
for i in range(1,10,2):
    print(i) 

#print table
n=int(input("Enter the table u want"))
for i in range(n,(n*10)+1,n):
     print(i)

## Iterating on strings
ast="Astarr"
for i in range(len(ast)):
     print(ast[i])

## Break and Continue
## Break -> It will break the loop
## Continue -> It will continue the loop
print("Understanding Break")
for i in range(10):
     if i==5:
          print("Break 5")
          break
     print(i)

print("Understanding Continue")
for i in range(10):
     if i==5:
          print("Conitnue 5")
          continue
     print(i)

## else in break
print("Understanding else in break")
for i in range(10):
     if i==5:
          print("Break 5")
          break
     print(i)
else:
     print("Break 5")
