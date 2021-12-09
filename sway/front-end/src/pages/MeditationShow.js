import React from 'react'
import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Slider from '../components/Slider'
import ControlPanel from '../components/audio-controls/ControlPanel'
import '../styles/audio-player.scss'
import '../styles/med-show.scss'
import { getUserId } from '../helpers/auth'
import { getAxiosRequestConfig, getProfile } from '../helpers/api'

const MeditationShow = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [minutes, setMinutes] = useState(0)
  const [sessions, setSessions] = useState(0)
  const [audio, setAudio] = useState('')
  const { id } = useParams()

  const [profileData, setProfileData] = useState({
    username: '',
    profileImage: '',
    favourites: [],
    sessions: '',
    minutes: '',
  })

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [favIdArray, setFavIdArray] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  const audioRef = useRef()
  useEffect(() => {
    const getMeditation = async (id) => {
      const user = parseInt(getUserId())
      const res = await axios.get(`/api/meditations/${id}`)
      console.log(res)
      setName(res.data.name)
      setDescription(res.data.description)
      setCategory(res.data.category)
      setMinutes(res.data.minutes)
      setSessions(res.data.sessions)
      setAudio(res.data.audio)
      const usefulArray = []
      for (let i = 0; i < res.data.favourited_by.length; i++) {
        usefulArray.push(res.data.favourited_by[i].id)
      }
      setFavIdArray(usefulArray)
      if (favIdArray.includes(user)) {
        setHasLiked(true)
      }
    }
    getMeditation(id)
    // eslint-disable-next-line
  }, [id, hasLiked])

  const handleFavourite = async () => {
    setHasLiked(true)
    const currentUser = parseInt(getUserId())
    const usefulArray = favIdArray
    usefulArray.push(currentUser)
    setFavIdArray(usefulArray)

    const data = {
      name: name,
      description: description,
      audio: audio,
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
  const handleRemove = async () => {
    setHasLiked(false)
    const currentUser = parseInt(getUserId())
    const usefulArray = favIdArray
    const index = usefulArray.indexOf(currentUser)
    if (index > -1) {
      usefulArray.splice(index, 1)
    }
    setFavIdArray(usefulArray)

    const data = {
      name: name,
      description: description,
      audio: audio,
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

  useEffect(() => {
    const getUserProfile = async () => {
      const config = getProfile(getUserId())
      try {
        const res = await axios(config)
        console.log(res.data)
        setProfileData({
          username: res.data.username,
          profileImage: res.data.profile_image,
          favourites: res.data.favourites,
          sessions: res.data.sessions,
          minutes: res.data.minutes,
        })
        console.log(profileData)
      } catch (err) {
        console.log(err)
      }
    }
    getUserProfile()
    // eslint-disable-next-line
  }, [])

  const addSession = async () => {
    const currentUser = parseInt(getUserId())
    console.log(minutes, sessions)
    const data = {
      minutes: profileData.minutes + minutes,
      sessions: profileData.sessions + sessions,
    }
    const config = getAxiosRequestConfig(
      `/api/auth/profile/${currentUser}/`,
      data,
      'put'
    )
    try {
      const res = await axios(config)
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.9

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
      addSession()
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
      <div className="audio-container">
        <div className="audio-player">
          <Slider onChange={onChange} percentage={percentage} />
          <audio
            ref={audioRef}
            src={audio}
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
            handleRemove={handleRemove}
            hasLiked={hasLiked}
          />
        </div>
      </div>
      <p>{favIdArray.length} users have saved this meditation.</p>
    </div>
  )
}

export default MeditationShow
