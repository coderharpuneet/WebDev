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
     console.log("All notes!!!!!!!!!!");
     console.log(notes);
     res.send("Note created successfully");
});

// GET all Notes
app.get("/notes",(req,res)=>{
     res.send(notes);
});

// Delete note
app.delete("/notes/:id",(req,res)=>{ //id is params 
     const {id}=req.params;
     delete notes[id];
     res.send("Note deleted successfully");
     res.send("Update note");
     res.send(notes);
});

app.patch("/notes/:id",(req,res)=>{
     const {id}=req.params;
     notes[id].description=req.body.description;
     res.send("Note updated successfully");
     res.send(notes);
});
module.exports = app;