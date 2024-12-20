import { useState } from 'react'
import './App.css'
import Note from './Note.jsx';


function App() {
  const notesData = [
    { id: 1, title: 'Note 1', body: 'This is the first note.' },
    { id: 2, title: 'Note 2', body: 'This is the second note.' },
    { id: 3, title: 'Note 3', body: 'This is the third note.' },
    { id: 4, title: 'Note 4', body: 'This is the fourth note.' },
    { id: 5, title: 'Note 5', body: 'This is the fifth note.' },
    { id: 6, title: 'Note 6', body: 'This is the sixth note.' },
  ];
  const [notes, setNotes] = useState(notesData)
  const [blurred, setBlurred] = useState(false)

  const popUp = () => {
    setBlurred(!blurred)
  }

  const deleteNote = (id) => (
    setNotes(notes.filter(note=>note.id !== id))
  )

  const addNote = (title, body) => (
    setNotes([...notes, {
      id: Math.floor(Math.random() * 100000),
      title,
      body
    }])
  )
  return (
    <div className={`app ${blurred ? 'blurred' : ''}`}>
      <div id='header'>
          <h1 id='h1'>Notes</h1>
          <button onClick={popUp} id='buttonApp'><h2 id='inner'>Add Note</h2></button>
      </div>
      <div id="notes">
         {notes.map((note) => (
          <Note 
            onDelete={() => deleteNote(note.id)} 
            id={note.id} 
            title={note.title} 
            body={note.body}
          />
         ))}
      </div>
    </div>
  )
}

export default App
