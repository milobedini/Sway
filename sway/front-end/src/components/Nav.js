import { removeToken, removeUsername } from '../helpers/auth'
import { Link, useNavigate } from 'react-router-dom'

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
          <Link to="/meditate/guided">Meditate</Link>
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
