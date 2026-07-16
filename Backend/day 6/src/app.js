const express=require('express');
const app=express();
const noteModel=require('./models/notes.model');

app.use(express.json());
/**
 * - POST /notes
 * - req.body => {title, description}
 */
app.post('/notes', async (req, res) => {
     // Logic to create a new note
     const { title, description } = req.body;
     const note= await noteModel.create({ title, description })
     res.status(201).json({ 
          message: 'Note created successfully', 
          note 
     });
});

/**
 * - GET /notes
 * fetches all the notes data
 */
app.get('/notes',async(req,res)=>{
     const notes=await noteModel.find(); //returns all the notes from the database in the form of an array
     res.status(200).json({
          message:'Notes fetched successfully',
          notes
     })
})

module.exports=app;