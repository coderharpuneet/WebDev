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


## While Loop

# Q1. Print digits of a number on seperate line
print("Understanding While Loop")
print("Q1. Print digits of a number on seperate line")
num=123
while num>0:
     print(num%10)
     num=num//10

# Q2. Print reverse of a number
print("Q2. Print reverse of a number")
num=int(input("Enter the number o reverse"))
rev=0
while num>0:
     rev=rev*10+num%10
     num=num//10
print(rev)




# Check if a number is palindrome or not
print("Check if a number is palindrome or not")
num=int(input("Enter the number to check if it is palindrome or not"))
original_num=num
rev=0
while num>0:
     rev=rev*10+num%10
     num=num//10
print(rev)
if original_num==rev:
     print("The number is a palindrome")
else:
     print("The number is not a palindrome")




# Random number guessing Game
import random
print("Random number guessing Game")
num=random.randint(1,10)
count=0
while True:
     guess=int(input("Enter your guess: "))
     count+=1
     if guess==num:
          print(f"You guessed it right in {count} attempts")
          break
     else:
          if guess>num:
               print("Too high")
          else:
               print("Too low")
          # print("You guessed it wrong")



#Functions
# def function_name(parameters):
#      function body
#      return value

def add(a,b): # a,b are parameters
     return a+b
print(add(12,6)) # 12,6 are arguments


# Types of arguments
# 1. Positional arguments
# 2. Keyword arguments
# 3. Default arguments
# 4. Variable length arguments

# 1. Positional arguments
def hello(name,age=18):
     print(f"Hello {name}. You are {age} years old")
hello("Astarr",20) # Positional arguments
hello(age=20,name="Astarr") # Keyword arguments
hello("Astarr") # Default arguments

# 4. Variable length arguments
def add(*args):
     return sum(args)
print(add(1,2,3,4,5))





# Data Structure
# Data structure in python are used to store data efficiently
# Two types:
# 1. In-built Data Structure
# 2. User-defined Data Structure

# In-built Data Structure
# 1. List
# 2. Tuple
# 3. Set
# 4. Dictionary

# User-defined Data Structure
# 1. Stack
# 2. Queue
# 3. Linked List
# 4. Tree
# 5. Graph


# LIST

#syntax
a=[1,2,3,4,5]

# List is MUTABLE
# List allows duplicate values
# List can have heterogeneous values
# List is an ordered data structure

print(a[1]) # Indexing
print(a[1:3]) # Slicing
print(a[1:3:1]) # Slicing with step
print(a[3:1:-1]) # Slicing with step
print(a[::-1]) # Reverse of a list

# list traversing and methods
list1=[1,2,3,4,5]
# 1st method
for i in range(len(a)):
     print(a[i])

# 2nd Method
for ele in a:
     print(ele)


#Methods in list
a.append(6)
print(a)
a.insert(1,6)
print(a)
a.extend([6,7,8])
print(a)
a.remove(6) # first occurence of 6 is removed
print(a)
a.pop(3)
print(a)
ind=a.index(1)
print(ind)
a.sort()
count=a.count(1)
print(count)
b=a.copy()
b.clear()





# Some Questions on List
# Q1. Print positive and negative elements of the list
l=[-45,67,12,-68,90,12,-45,34]
print("Positive elements")
for i in l:
     if i>=0:
          print(i)
print("Negative elements")
for i in l:
     if i<0:
          print(i)


# Q2. Mean of list elements
print("Mean of list elements")
sum=0
for i in l:
     sum+=i
print(sum/len(l))

# Q3. Find greatest element and print its index too.
print("Greatest element and its index")
greatest=l[0]
for i in range(len(l)):
     if l[i]>greatest:
          greatest=l[i]
          index=i
print("Greatest element: ",greatest)
print("Index of greatest element: ",index)


# Q4. find the second greatest element
print("Second greatest element")
greatest=l[0]
second_greatest=l[0]
for i in range(len(l)):
     if l[i]>greatest:
          second_greatest=greatest
          greatest=l[i]
     elif l[i]>second_greatest and l[i]!=greatest:
          second_greatest=l[i]
print("Second greatest element: ",second_greatest)


# Q5. Check if a list is sorted or not
print("Check if a list is sorted or not")
l=[1,2,3,4,5]
for i in range(len(l)-1):
     if(l[i]>l[i+1]):
          print("The list is not sorted")
          break
else:
     print("The list is sorted") 







#TUPLE
#syntax
a=(1,2,3,4,5)

# Tuple is IMMUTABLE
# Tuple allows duplicate values
# Tuple can have heterogeneous values
# Tuple is an ordered data structure 

#Taversing in tuple
for i in a:
     print(i)

for i in range(len(a)):
     print(a[i]) 

# Methods in tuple
# count()
# index()
print(a.count(1))
print(a.index(1))

a,b,c,d=(1,2,3,4)
print(a)
print(b)
print(c)
print(d)

a=(1,)
print(type(a)) # Tuple
a=1
print(type(a)) # Int


# Set
# Syntax
s = {1, 2, 3, 4, 5}
print(s)

# Sets are mutable
# Sets cannot have duplicates
# Sets are unordered
# Sets is semi-heterogeneous

#How Set stores values in Python
a={1,2,3,4,5}
print(a)

# Set Traversing
for i in a:
     print(i)

# Set Methods
s.add(6)
print(s)
s.remove(6)
print(s)
s.pop()
print(s)
s.clear()
print(s)

a={1,2,3,4,5}
b={4,5,6,7,8}
print(a.union(b))
print(a.intersection(b))
print(a.difference(b))
print(a.symmetric_difference(b))
print(b^a)
 


# Dictionary ->  hashmap in other languages
d={1:"Astarr",2:"Shah Ji"}
print(d)
# Dictionary is mutable
# Dictionary cannot have duplicate keys
# Dictionary is unordered
# Dictionary is semi-heterogeneous

print(d[1])
d[1]="Prem"
d.update({2:"Shah Ji"})
print(d)
d[50]=500 # creating
del d[50]
print(d)
 
#traversing in dictionary
for i in d:
     print(i,d[i])

# help(dict) # to get help about dictionary

# Deep and shallow copy
# List
a=[1,2,3,4,5]
b=a.copy()
b[0]=100
print(a)
print(b)

#Dictionary
dictio={1:"Astarr",2:"Shah Ji"}
dictio2=dictio.copy()
dictio2[1]="Prem"
print(dictio)
print(dictio2)

# Dictionary Questions

# Q1. Write a python script to merge two dictionaries
print("Q1. Write a python script to merge two dictionaries")
dict1={1:"Astarr",2:"Shah Ji"}
dict2={3:"Prem",4:"Dhillon"}
# dict1.update(dict2) Method 1

for i in dict2:
     dict1[i]=dict2[i] 
print(dict1)

# Q2. Write a python script to sum all the values in dictionary
sum1={1:50,2:40,3:100}
ans=0
for i in sum1:
     ans+=sum1[i]
print(ans)

# Q3. Count frequency of each elements in a list.
lq3=[1,1,1,1,1,2,2,2,2,3,3,3,3,3,3,3,3,3,4,4,5,5,5]
dq3={}
for i in lq3:
     if i in dq3.keys():
          dq3[i]+=1
     else:
          dq3[i]=1
print(dq3)


# Q4. Write a python program to combine two dictionaries by combining values for common keys
dq4i={10:100,20:200,40:300}
dq4ii={40:400,50:500,60:600} 
for i in dq4ii:
     if i in dq4i.keys():
          dq4i[i]+=dq4ii[i]
     else:
          dq4i[i]=dq4ii[i]
print(dq4i)