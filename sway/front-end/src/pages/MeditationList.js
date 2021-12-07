import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import MeditationCard from '../components/MeditationCard'
import '../styles/med-list.scss'
import FilterButton from '../components/FilterButton'

const filterMap = {
  All: () => true,
  Breath: (meditation) => meditation.category.includes('Breath'),
  Mindfulness: (meditation) => meditation.category.includes('Mindfulness'),
  Scan: (meditation) => meditation.category.includes('Scan'),
  Sleep: (meditation) => meditation.category.includes('Sleep'),
  Vipassana: (meditation) => meditation.category.includes('Vipassana'),
  Shorter: (meditation) => meditation.minutes <= 10,
  Longer: (meditation) => meditation.minutes > 10,
}
const filterNames = Object.keys(filterMap)

const MeditationList = () => {
  const [meditations, setMeditations] = useState([])
  const [filter, setFilter] = useState('All')

  const filterList = filterNames.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ))

  const meditationList = meditations
    .filter(filterMap[filter])
    .map((meditation) => (
      <li key={meditation.id}>
        <MeditationCard {...meditation} />
      </li>
    ))

  useEffect(() => {
    const getMeditations = async () => {
      const res = await axios.get('/api/meditations/')
      console.log(res.data)
      setMeditations(res.data)
    }
    getMeditations()
  }, [])
  return (
    <div className="med-list-page">
      <div className="categories">
        <h5>Choose a Category:</h5>
        <ul>{filterList}</ul>
      </div>
      <div className="med-list">
        <ul>{meditationList}</ul>
      </div>
    </div>
  )
}

export default MeditationList
