/**
 * Create server
 */
const express = require('express');
const app = express();
const noteModel = require('./models/note.model');

app.use(express.json());

/**
 * - POST /api/notes
 * - Create new note and save in mongodb
 */
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body;
    const newNote = await noteModel.create({ title, description });
    res.status(201).json(()=>{
     message: 'Note created successfully',
     newNote
    });
});

module.exports = app;