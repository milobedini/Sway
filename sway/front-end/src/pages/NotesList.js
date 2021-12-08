import { useState, useEffect } from 'react'
import axios from 'axios'
import { getNotes } from '../helpers/api'
import NoteCard from '../components/NoteCard'
import '../styles/note-list.scss'
import NoteAdd from '../components/NoteAdd'
const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const getUserNotes = async () => {
      const config = getNotes()
      try {
        const res = await axios(config)
        console.log(res.data)
        setNotes(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUserNotes()
  }, [])
  return (
    <div className="notes-container">
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} />
        ))}
        <NoteAdd />
      </div>
    </div>
  )
}

export default NotesList
