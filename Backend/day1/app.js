// const catMe=require("cat-me")
// console.log(catMe())
// console.log(catMe())
// console.log(catMe())


const express=require("express")
const app=express() //Server is created
const port=3000

//Programming the server
app.get("/",(req,res)=>{
     res.send("Hello World")
})

app.listen(port) //Starts the server
