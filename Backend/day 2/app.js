const express=require('express');
const app=express(); //Creating server instance

app.get('/',(req,res)=>{ //Defining a route for the root URL
    res.send("Hello World!"); //Sending a response to the client
})

app.get('/about',(req,res)=>{ //Defining a route for the /about URL
    res.send("This is the about page."); //Sending a response to the client
})

app.listen(3000,()=>{ //Starting the server
     console.log("Server is running on port 3000");
}) 
