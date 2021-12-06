import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from '../components/Slider'
import anapana from '../audio/anapana.mp3'
import ControlPanel from '../components/audio-controls/ControlPanel'
import '../styles/audio-player.scss'
import '../styles/med-show.scss'
import { getUserId } from '../helpers/auth'
import { getAxiosRequestConfig } from '../helpers/api'

const MeditationShow = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const { id } = useParams()

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [favIdArray, setFavIdArray] = useState([])

  const audioRef = useRef()
  useEffect(() => {
    const getMeditation = async (id) => {
      const res = await axios.get(`/api/meditations/${id}`)
      setName(res.data.name)
      setDescription(res.data.description)
      setCategory(res.data.category)
      const usefulArray = []
      for (let i = 0; i < res.data.favourited_by.length; i++) {
        usefulArray.push(res.data.favourited_by[i].id)
      }
      setFavIdArray(usefulArray)
    }
    getMeditation(id)
  }, [favIdArray.length, id])

  const handleFavourite = async () => {
    const currentUser = parseInt(getUserId())
    const usefulArray = favIdArray
    usefulArray.push(currentUser)
    setFavIdArray(usefulArray)

    const data = {
      name: name,
      description: description,
      audio: 'blah',
      category: category,
      favourited_by: favIdArray,
    }
    const config = getAxiosRequestConfig(`/api/meditations/${id}/`, data, 'put')
    try {
      const res = await axios(config)
      setFavIdArray(res.data.favourited_by)
    } catch (err) {
      console.log(err)
    }
  }
  const onChange = (event) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * event.target.value
    setPercentage(event.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.9

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }
    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrentDuration = (event) => {
    const percent = (
      (event.currentTarget.currentTime / event.currentTarget.duration) *
      100
    ).toFixed(2)
    const time = event.currentTarget.currentTime
    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }

  return (
    <div className="meditation-show">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>*{category}*</p>
      <div className="audio-container">
        <div className="audio-player">
          <Slider onChange={onChange} percentage={percentage} />
          <audio
            ref={audioRef}
            src={anapana}
            onLoadedData={(event) => {
              setDuration(event.currentTarget.duration.toFixed(2))
            }}
            onTimeUpdate={getCurrentDuration}
          ></audio>
          <ControlPanel
            play={play}
            isPlaying={isPlaying}
            duration={duration}
            currentTime={currentTime}
            handleFavourite={handleFavourite}
          />
        </div>
      </div>
      <p>{favIdArray.length} users have saved this meditation.</p>
    </div>
  )
}

export default MeditationShow
