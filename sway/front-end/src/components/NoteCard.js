import React from 'react'

const NoteCard = ({ date, text }) => {
  return (
    <div>
      <h2>{date}</h2>
      <p>{text}</p>
    </div>
  )
}

export default NoteCard
