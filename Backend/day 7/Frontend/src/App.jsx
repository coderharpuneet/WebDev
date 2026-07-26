import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])

  const [editingId, setEditingId] = useState(null)
  const [editTitle, setEditTitle] = useState("")
  const [editDescription, setEditDescription] = useState("")

  const fetchNotes = () => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((response) => {
        setNotes(response.data)
      })
      .catch((error) => {
        console.error("Error fetching notes:", error)
      })
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  function handleSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((response) => {
        console.log("Note created:", response.data)
        fetchNotes()

        e.target.reset()
      })
      .catch((error) => {
        console.error("Error creating note:", error)
      })
  }

  function handleDelete(noteId) {
    axios
      .delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((response) => {
        console.log("Note deleted:", response.data)
        fetchNotes()
      })
      .catch((error) => {
        console.error("Error deleting note:", error)
      })
  }

  function handleEdit(note) {
    setEditingId(note._id)
    setEditTitle(note.title)
    setEditDescription(note.description)
  }

  function handleUpdate(noteId) {
    axios
      .patch(`http://localhost:3000/api/notes/${noteId}`, {
        title: editTitle,
        description: editDescription,
      })
      .then((response) => {
        console.log("Note updated:", response.data)

        fetchNotes()

        setEditingId(null)
        setEditTitle("")
        setEditDescription("")
      })
      .catch((error) => {
        console.error("Error updating note:", error)
      })
  }

  return (
    <>
      <form className="note-create-form" onSubmit={handleSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Enter Title"
          required
        />

        <textarea
          name="description"
          placeholder="Enter Description"
          required
        ></textarea>

        <button type="submit">Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>

            {editingId === note._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />

                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                ></textarea>

                <button className="update-btn" onClick={() => handleUpdate(note._id)}>
                  Update
                </button>

                <button
                  onClick={() => {
                    setEditingId(null)
                    setEditTitle("")
                    setEditDescription("")
                  }}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <h2>{note.title}</h2>

                <p>{note.description}</p>

                <button className="edit-btn" onClick={() => handleEdit(note)}>
                  Edit
                </button>

                <button
                  className="delete-note-button"
                  onClick={() => handleDelete(note._id)}
                >
                  Delete
                </button>
              </>
            )}

          </div>
        ))}
      </div>
    </>
  )
}

export default App