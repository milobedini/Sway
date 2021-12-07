import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getAxiosRequestConfig } from '../helpers/api'
import { useState } from 'react'
import axios from 'axios'

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

  //   const formInputProps = { data, errorInfo, handleFormChange }
  return (
    <div className="edit-thread">
      <div>
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <h2>Start your own thread...</h2>
          </div>
          {/* <FormInput
            type="text"
            name="title"
            className="form-control"
            {...formInputProps}
          /> */}
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title
            </label>
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
            <label htmlFor="text" className="form-label">
              Text
            </label>
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
            <input type="submit" value="Post" />
          </div>
          {isError ? (
            <div className="error">
              <p>Something went wrong. Please try again. Error: {errorInfo}</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default EditThread
