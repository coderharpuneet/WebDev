from pathlib import Path
import os as os

def readFileAndFolder():
     path=Path('')
     items= list(path.rglob('*'))
     for i,items in enumerate (items):
          print(f"{i+1} : {items}")

def createFile():
     try:
          readFileAndFolder()
          name=input("Please tell your file name: ")
          p=Path(name)
          if not p.exists() and p.is_file():
               with open(p,"w") as fs:
                    data=input("what you want to write in this file: ")
                    fs.write(data)
               print("File created Successfully")
          else:
               print("This file already exists")
     except Exception as err:
          print(f"An error occured as {err}")



def readFile():
     try:
          readFileAndFolder()
          name=input("Which file do you want to read")
          p=Pth(name)
          if p.exists() and p.is_file():
               with open(p,'r') as fs:
                    data=fs.read()
                    print(data)
               print("Readed Successfully.")
          else:
               print("This file does not exist.")
     except Exception as err:
          print(f"An unknown error occured as {err}")




def updatFile():
     try:
          readFileAndFolder()
          name=input("Enter the file name you want to update: ")
          p=Path(name)
          if p.exists() and p.is_file():
               print("press 1 for changing the name of your file")
               print("press 2 for overwriting the data of your file")
               print("press 3 for appending content in your file")
               res=int(input("Tell you response: "))
               if res==1:
                    name2=input("Tell new file name: ")
                    p2=Path(name2)
                    p.rename(p2)
               if res==2:
                    with open(p, 'w') as fs:
                         data = input("Tell what you want to write this is overwrite the data: ")
                         fs.write(data)
               if res==3:
                    with open(p, 'w') as fs:
                         data = input("Tell what you want to append: ")
                         fs.write(" "+data)
     except Exception as err:
          print(f"An error occured as {err}")




def deleteFile():
     try:

          readFileAndFolder()
          name=input("Which file you want to delete: ")
          p=Path(name)
          if p.exists() and p.is_file():
               os.remove(p)
               print("File removed!!")
          else:
               print("No such file exists.")
     except Exception as err:
          print(f"Error occured as {err}")


print("Press 1 for creating a file: ")
print("Press 2 for reading a file: ")
print("Press 3 for updating a file: ")
print("Press 4 for deleting a file: ")

check=int(input("Enter your choice: "))
if check==1:
     createFile()
if check==2:
     readFile()
if check==3:
     updateFile()
if check==4:
     deleteFile()