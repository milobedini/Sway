import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAxiosDeleteConfig, getNotes } from '../helpers/api'
import NoteCard from '../components/NoteCard'
import '../styles/note-list.scss'
import NoteAdd from '../components/NoteAdd'
const NotesList = () => {
  const [notes, setNotes] = useState([])
  const [noteToDelete, setNoteToDelete] = useState([])

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
  }, [noteToDelete])

  const deleteClick = (id) => {
    const noteToDelete = notes.filter((note) => note.id === id)
    console.log(noteToDelete)
    setNoteToDelete(noteToDelete[0])
    window.location.reload()
  }

  useEffect(() => {
    const id = noteToDelete.id
    const deleteNote = async (id) => {
      const config = getAxiosDeleteConfig(`/api/notes/${id}/`)
      try {
        const res = await axios(config)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    }
    deleteNote(id)
  }, [noteToDelete])

  return (
    <div className="notes-container">
      <div className="note-list">
        {notes.map((note) => (
          <NoteCard key={note.id} {...note} handleDeleteNote={deleteClick} />
        ))}
        <NoteAdd />
      </div>
    </div>
  )
}

export default NotesList
