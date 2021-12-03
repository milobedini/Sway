import { useState, useEffect } from 'react'
import axios from 'axios'
import { getNotes } from '../helpers/api'
import NoteCard from '../components/NoteCard'
const NotesList = () => {
  const [notes, setNotes] = useState([])
  //   const [dates, setDates] = useState([])

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
    <div>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{<NoteCard {...note} />}</li>
        ))}
      </ul>
    </div>
  )
}

export default NotesList
