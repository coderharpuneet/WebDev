/*
-> Server create akrna 
-> Server config karna
*/
const express = require('express');

const app = express();

app.use(express.json());
const notes=[
     {
          title:"My first note",
          description:"This is my first note"
     }
]

app.get("/",(req,res)=>{
     res.send("Hello from express");
});

//Create new notes
app.post("/notes",(req,res)=>{
     console.log(req.body);
     notes.push(req.body);
     res.status(201).json({
          message:"Note created successfully"
     });
     console.log("All notes!!!!!!!!!!");
     console.log(notes);
     // res.send("Note created successfully");
});

// GET all Notes
app.get("/notes",(req,res)=>{
     res.status(200).json({
          message:"All notes fetched successfully",
          notes:notes
     });
     // res.send(notes);
});

// Delete note
app.delete("/notes/:id",(req,res)=>{ //id is params 
     const {id}=req.params;
     delete notes[id];
     res.status(204).json({
          message:"Note deleted successfully"
     });
     // res.send("Note deleted successfully");
     
});

app.patch("/notes/:id",(req,res)=>{
     const {id}=req.params;
     notes[id].description=req.body.description;
     res.status(200).json({
          message:"Note updated successfully",
          notes:notes
     });
     // res.send("Note updated successfully");
     // res.send(notes);
});
module.exports = app;