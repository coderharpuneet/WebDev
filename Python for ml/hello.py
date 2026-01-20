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