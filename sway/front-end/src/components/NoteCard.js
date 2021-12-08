import { MdDeleteForever } from 'react-icons/md'
import '../styles/note.scss'

const NoteCard = ({ id, date, text, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{new Date(date).toLocaleDateString()}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  )
}

export default NoteCard
