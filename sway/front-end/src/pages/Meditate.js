import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/meditate.scss'

const Meditate = () => {
  return (
    <div className="med-wrapper">
      <div>
        <Link to="/meditate/guided">
          <button className="btn btn-info" id="guided">
            Guided Meditations
          </button>
        </Link>
        <button id="timer" className="btn btn-info">
          Meditation Timer
        </button>
      </div>
      <div className="external-api">Quote here</div>
    </div>
  )
}

export default Meditate
