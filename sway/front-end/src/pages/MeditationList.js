import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MeditationCard from '../components/MeditationCard'

const MeditationList = () => {
  const [meditations, setMeditations] = useState([])

  useEffect(() => {
    const getMeditations = async () => {
      const res = await axios.get('/api/meditations/')
      console.log(res.data)
      setMeditations(res.data)
    }
    getMeditations()
  }, [])
  return (
    <div>
      <ul>
        {meditations.map((meditation) => (
          <li key={meditation.id}>
            <MeditationCard {...meditation} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MeditationList
