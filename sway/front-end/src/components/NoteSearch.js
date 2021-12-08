import { MdSearch } from 'react-icons/md'

const NoteSearch = ({ handleSearchNote }) => {
  return (
    <div className="note-search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search..."
        onChange={(event) => handleSearchNote(event.target.value)}
      />
    </div>
  )
}

export default NoteSearch
