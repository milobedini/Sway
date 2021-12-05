import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setToken, setUserId, setUsername } from '../helpers/auth'
import axios from 'axios'
import FormInput from '../components/FormInput'

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [errorInfo, setErrorInfo] = useState({})
  const [isError, setIsError] = useState(false)
  const navigate = useNavigate()

  const handleSuccessfulLogin = ({ token, username, id }) => {
    setToken(token)
    setUsername(username)
    setUserId(id)
    setIsLoggedIn(true)
    setIsError(false)
    navigate('/')
  }

  const handleError = (error) => {
    console.log(error)
    if (error.response) {
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
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/auth/login/', data)
      console.log(res)
      handleSuccessfulLogin(res.data)
    } catch (error) {
      console.log(error)
      handleError(error)
    }
  }

  const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <div className="login">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>
              Welcome back <small>Sign in to Sway</small>
            </h2>
          </div>
          <div>
            <FormInput type="email" name="email" {...formInputProps} />
            <FormInput type="password" name="password" {...formInputProps} />
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
          <div>
            <p>
              <Link to="/register">Not registered yet? Sign up here.</Link>
            </p>
          </div>
          {isError ? (
            <div className="error">
              <p>Your credentials were invalid. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
