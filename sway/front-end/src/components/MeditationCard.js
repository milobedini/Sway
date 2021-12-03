import React from 'react'

const MeditationCard = ({ name, description, audio, category }) => {
  return (
    <div>
      <div>
        <h2>{name}</h2>
      </div>
      <div>
        <h4>{description}</h4>
      </div>
      <div>
        <p>{audio}</p>
      </div>
      <div>
        <h6>{category}</h6>
      </div>
    </div>
  )
}

export default MeditationCard
