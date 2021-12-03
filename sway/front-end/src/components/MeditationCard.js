import React from 'react'
import { Link } from 'react-router-dom'

const MeditationCard = ({ id, name, description, audio, category }) => {
  return (
    <div>
      <Link to={`/meditate/guided/${id}`}>
        <div>
          <h2>{name}</h2>
        </div>
      </Link>
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
