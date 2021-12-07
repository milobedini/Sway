import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import FormInput from '../components/FormInput'
import '../styles/post-thread.scss'
import { getAxiosRequestConfig } from '../helpers/api'

const PostThread = () => {
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
      setErrorInfo(error.response.data)
      setIsError(true)
    }
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="post-thread">
      <div>
        <form onSubmit={handleSubmit} className="form-group">
          <div>
            <h2>Start your own thread...</h2>
          </div>
          <FormInput
            type="text"
            name="title"
            className="form-control"
            {...formInputProps}
          />

          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              className="form-control"
              id="text"
              rows="10"
              type="text"
              name="text"
              onChange={handleFormChange}
            ></textarea>
          </div>

          {/* <FormInput type="text" name="text" {...formInputProps} /> */}

          <div>
            <input type="submit" value="Post" />
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
  )
}

export default PostThread