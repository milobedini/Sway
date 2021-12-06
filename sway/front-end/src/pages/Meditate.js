import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/meditate.scss'

const Meditate = () => {
  return (
    <div className="med-wrapper">
      <Link to="/meditate/guided">
        <button className="btn btn-info" id="guided">
          Guided Meditations
        </button>
      </Link>
      <Link to="/meditate/timer">
        <button id="timer" className="btn btn-info">
          Meditation Timer
        </button>
      </Link>
    </div>
  )
}

export default Meditate
