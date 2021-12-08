import axios from 'axios'
import { useState } from 'react'
import { getAxiosRequestConfig } from '../helpers/api'

const NoteAdd = () => {
  const [noteText, setNoteText] = useState('')
  const charLimit = 600

  const handleChange = (event) => {
    console.log(event.target.value)
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveClick = async (event) => {
    event.preventDefault()
    if (noteText.trim().length <= 0) {
      return
    }
    const data = {
      text: noteText,
    }
    const config = getAxiosRequestConfig('/api/notes/', data)
    try {
      const res = await axios(config)
      console.log(res.data)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="note new">
      <textarea
        rows={8}
        cols={10}
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>{charLimit - noteText.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  )
}

export default NoteAdd
