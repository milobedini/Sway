import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAxiosRequestConfig } from '../helpers/api'
import { useState } from 'react'
import axios from 'axios'
import '../styles/thread-form.scss'

const EditThread = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [errorInfo, setErrorInfo] = useState({})
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
    const config = getAxiosRequestConfig(`/api/feed/${id}/`, data, 'put')
    try {
      const res = await axios(config)
      console.log(res)
      setIsError(false)
      navigate(`/feed/${id}`)
    } catch (err) {
      console.log(err)
      handleError()
    }
  }

  const handleError = (error) => {
    if (error) {
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  return (
    <div className="thread-form-container">
      <div className="edit-thread">
        <div>
          <form onSubmit={handleSubmit} className="form-group">
            <div>
              <h2>Edit your post...</h2>
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
              <button className="btn save">
                <input type="submit" value="Edit" />
              </button>
            </div>
            {isError ? (
              <div className="error">
                <p>
                  Something went wrong. Please try again. Error: {errorInfo}
                </p>
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

export default EditThread
