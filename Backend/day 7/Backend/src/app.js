/**
 * Create server
 */
const express = require('express');
const app = express();
const noteModel = require('./models/note.model');
const cors=require('cors');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', '/public')));

/**
 * - POST /api/notes
 * - Create new note and save in mongodb
 */
app.post('/api/notes', async (req, res) => {
    const { title, description } = req.body;
    const newNote = await noteModel.create({ title, description });
    res.status(201).json({
        message: 'Note created successfully',
        newNote
    });
});


/**
 * - GET /api/notes
 * - Get all notes from mongodb
 */
app.get('/api/notes', async (req, res) => {
    const notes = await noteModel.find();
    res.status(200).json(notes);
})

/**
 * - DELETE /api/notes/:id
 * - Delete note by id from mongodb
 */
app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await noteModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Note deleted successfully' });
}); 

/**
 * - PATCH /api/notes/:id
 * - Update note by id from mongodb
 */
app.patch('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(id, { title, description }, { new: true });
    res.status(200).json({
        message: 'Note updated successfully',
        updatedNote
    });
});

app.use('*name', (req, res) => {
    res.sendFile(path.join(__dirname, '..','/public/index.html'));
    // res.status(404).json({ message: 'Route not found' });
});

module.exports = app;