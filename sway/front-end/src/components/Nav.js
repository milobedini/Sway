import { removeToken, removeUsername } from '../helpers/auth'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.svg'
// import favicon1 from '../assets/Favicon 1.svg'
// import favicon2 from '../assets/Favicon 2.svg'

import React from 'react'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    removeUsername()
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">
            <img className="logo" src={logo}></img>
          </Link>
        </li>
        <li>
          <Link to="/meditate">Meditate</Link>
        </li>
        <li>
          <Link to="/meditate/timer">Timer</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
        <li>
          <Link to="/feed">Feed</Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Nav
