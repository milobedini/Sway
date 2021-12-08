import { MdDeleteForever } from 'react-icons/md'
import '../styles/note.scss'

const NoteCard = ({ date, text, id }) => {
  console.log(id)
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{new Date(date).toLocaleDateString()}</small>
        <MdDeleteForever className="delete-icon" size="1.3em" />
      </div>
    </div>
  )
}

export default NoteCard
