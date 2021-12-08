import React from 'react'
import { Link } from 'react-router-dom'

const MeditationCard = ({ id, name, description, category }) => {
  return (
    <div>
      <Link to={`/meditate/guided/${id}`}>
        <div>
          <h3>{name}</h3>
        </div>

        <div>
          <h5>{description}</h5>
        </div>
        <div>
          <p>*{category}*</p>
        </div>
      </Link>
    </div>
  )
}

export default MeditationCard
