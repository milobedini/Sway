import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { setToken, setUserId, setUsername } from '../helpers/auth'
import axios from 'axios'
// import FormInput from '../components/FormInput'
import '../styles/auth.scss'
import logo from '../assets/Favicon 2.svg'

const Login = ({ setIsLoggedIn }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  // const [errorInfo, setErrorInfo] = useState({})
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
      // setErrorInfo(error.response.data)
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

  // const formInputProps = { data, errorInfo, handleFormChange }

  return (
    <section className="vh-90 login" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Welcome Back
                    </p>
                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            name="email"
                            onChange={handleFormChange}
                            id="form3Example3c"
                            className="form-control"
                            placeholder="Your Email"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          ></label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            name="password"
                            onChange={handleFormChange}
                            id="form3Example4c"
                            className="form-control"
                            placeholder="Password"
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          ></label>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" className="btn login-btn btn-lg">
                          <input type="submit" value="Login" className="btn" />
                        </button>
                      </div>
                      <p>
                        <Link to="/register">
                          Not registered yet? Sign up here.
                        </Link>
                      </p>
                      {isError ? (
                        <div className="error">
                          <p>
                            Your credentials were invalid. Please try again.
                          </p>
                        </div>
                      ) : (
                        <></>
                      )}
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src={logo}
                      className="img-fluid"
                      style={{
                        height: '90%',
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login
