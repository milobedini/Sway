import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import '../styles/thread-form.scss'
import { getAxiosRequestConfig } from '../helpers/api'

const PostThread = () => {
  const navigate = useNavigate()

  const [isError, setIsError] = useState(false)
  const [data, setData] = useState({
    title: '',
    text: '',
  })

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const config = getAxiosRequestConfig('/api/feed/', data)
    try {
      const res = await axios(config)
      console.log(res)
      setIsError(false)
      navigate('/feed')
    } catch (err) {
      console.log(err)
      handleError()
    }
  }

  const handleError = (error) => {
    if (error) {
      setIsError(true)
    }
  }

  return (
    <div className="thread-form-container">
      <div className="post-thread">
        <div>
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <h2>Start your own thread...</h2>
            </div>
            <div className="form-group">
              <label htmlFor="title" className="form-label"></label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                placeholder="My thread's name"
                onChange={handleFormChange}
              ></input>
            </div>
            <div className="form-group">
              <label htmlFor="text" className="form-label"></label>
              <textarea
                className="form-control"
                id="text"
                rows="10"
                type="text"
                name="text"
                onChange={handleFormChange}
              ></textarea>
            </div>
            <div>
              <button className="save btn">
                <input type="submit" value="Post" />
              </button>
            </div>
            {isError ? (
              <div className="error">
                <p>Something went wrong. Please try again.</p>
              </div>
            ) : (
              <></>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default PostThread
