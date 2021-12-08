import { useState, useEffect } from 'react'
import axios from 'axios'
import { getAxiosDeleteConfig, getNotes } from '../helpers/api'
import NoteCard from '../components/NoteCard'
import '../styles/note-list.scss'
import NoteAdd from '../components/NoteAdd'
import NoteSearch from '../components/NoteSearch'
import NoteHeader from '../components/NoteHeader'
const NotesList = () => {
  const [notes, setNotes] = useState([])
  const [noteToDelete, setNoteToDelete] = useState([])
  const [searchText, setSearchText] = useState('')
  const [lightMode, setLightMode] = useState(false)

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
    <div className={`${lightMode && 'light-mode'}`}>
      <div className="notes-container">
        <NoteHeader handleToggleMode={setLightMode} />
        <NoteSearch handleSearchNote={setSearchText} />
        <div className="note-list">
          {notes
            .filter((note) => note.text.toLowerCase().includes(searchText))
            .map((note) => (
              <NoteCard
                key={note.id}
                {...note}
                handleDeleteNote={deleteClick}
              />
            ))}
          <NoteAdd />
        </div>
      </div>
    </div>
  )
}

export default NotesList
