import React from 'react'

const NoteHeader = ({ handleToggleMode }) => {
  return (
    <div className="note-header">
      <h1>Notes</h1>
      <button
        onClick={() => handleToggleMode((prevLightMode) => !prevLightMode)}
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  )
}

export default NoteHeader
