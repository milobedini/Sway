import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { getProfile } from '../helpers/api'
import MeditationCard from '../components/MeditationCard'

const Profile = () => {
  const [data, setData] = useState({
    username: '',
    profileImage: '',
    favourites: [],
    sessions: '',
    minutes: '',
  })

  useEffect(() => {
    const getUserProfile = async () => {
      const config = getProfile(1)
      try {
        const res = await axios(config)
        console.log(res.data)
        setData({
          username: res.data.username,
          profileImage: res.data.profile_image,
          favourites: res.data.favourites,
          sessions: res.data.sessions,
          minutes: res.data.minutes,
        })
      } catch (err) {
        console.log(err)
      }
    }
    getUserProfile()
  }, [])

  return (
    <div>
      <h4>
        Username
        <p>{data.username}</p>
      </h4>
      <h4>
        Profile Picture
        <p>{data.profileImage}</p>
      </h4>
      <h4>
        Your number of sessions:
        <p>{data.sessions}</p>
      </h4>
      <h4>
        Minutes in meditation:
        <p>{data.minutes}</p>
      </h4>
      <h4>Your favourites:</h4>
      <ul>
        {data.favourites.map((meditation) => (
          <li key={meditation.id}>
            <MeditationCard {...meditation} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile
