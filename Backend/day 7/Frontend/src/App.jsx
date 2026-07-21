import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/api/notes')
      .then((response) => {
        setNotes(response.data)
      })
      .catch((error) => {
        console.error('Error fetching notes:', error)
      })
  }, [])

  return (
    <>
      <div className="notes">
        {notes.map((note, index) => (
          <div className="note" key={index}>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App