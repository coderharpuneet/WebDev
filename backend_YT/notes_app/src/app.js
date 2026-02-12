const express=require("express");
const app=express();
app.use(express.json())

/*
note={
    title:"my first note",
    content:"this is my first note",
}
*/ 

const notes=[]

// Post /notes
app.post('/notes',(req,res)=>{
     notes.push(req.body);
     res.status(201).json({
          message:"note added successfully", 
     });
})

// Get /notes
app.get("/notes",(req,res)=>{
     res.status(200).json({
          notes:notes,
     });
})


// /delete /notes/:index

app.delete("/notes/:index",(req,res)=>{
     const index=req.params.index;
     delete notes[index];
     res.status(200).json({
          message:"note deleted successfully",
     });
})


// patcch /notes/:index

app.patch("/notes/:index",(req,res)=>{
     const index=req.params.index;
     notes[index]=req.body;
     res.status(200).json({
          message:"note updated successfully",
     });
})



module.exports=app;