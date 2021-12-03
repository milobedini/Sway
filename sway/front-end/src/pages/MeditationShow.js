import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const MeditationShow = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [audio, setAudio] = useState('')
  const [favourited, setFavourited] = useState([])
  const { id } = useParams()

  useEffect(() => {
    const getMeditation = async (id) => {
      const res = await axios.get(`/api/meditations/${id}`)
      console.log(res.data)
      setName(res.data.name)
      setDescription(res.data.description)
      setCategory(res.data.category)
      setAudio(res.data.audio)
      setFavourited(res.data.favourited_by)
    }
    getMeditation(id)
  }, [id])

  return (
    <div className="meditation-show">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{category}</p>
      <audio>{audio}</audio>
      <p>{favourited.length} users have saved this meditation.</p>
    </div>
  )
}

export default MeditationShow
