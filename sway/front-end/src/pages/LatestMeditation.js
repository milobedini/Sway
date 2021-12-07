import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const LatestMeditation = () => {
  const [latest, setLatest] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const checkLatestId = async () => {
      const res = await axios.get('/api/meditations/latest/')
      console.log(res.data)
      setLatest(res.data.id)
    }
    checkLatestId()
  }, [])
  console.log(latest)
  navigate(`/meditate/guided/${latest}`)

  return <div></div>
}

export default LatestMeditation
