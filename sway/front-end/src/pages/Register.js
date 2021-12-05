import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../styles/auth.scss'

import React from 'react'
import FormInput from '../components/FormInput'

const Register = () => {
  const [data, setData] = useState({
    email: '',
    username: '',
    profile_image: '',
    password: '',
    password_confirmation: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSuccessfulRegister = () => {
    setIsError(false)
    navigate('/login')
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/register/', data)
      handleSuccessfulRegister()
      console.log(res.data)
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

  const handleFormChange = (event) => {
    const { name, value } = event.target
    setData({
      ...data,
      [name]: value,
    })
    console.log(data)
  }
  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="register">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>
              Welcome <small>Register to Sway</small>
            </h2>
          </div>
          <FormInput type="email" name="email" {...formInputProps} />
          <FormInput type="text" name="username" {...formInputProps} />
          <FormInput type="text" name="profile_image" {...formInputProps} />
          <FormInput type="password" name="password" {...formInputProps} />
          <FormInput
            type="password"
            name="password_confirmation"
            {...formInputProps}
          />
          <div>
            <input type="submit" value="Register" />
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

export default Register
