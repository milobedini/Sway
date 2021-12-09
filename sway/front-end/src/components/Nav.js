import { removeToken, removeUserId, removeUsername } from '../helpers/auth'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/Logo.svg'

import React from 'react'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    removeToken()
    removeUsername()
    removeUserId()
    setIsLoggedIn(false)
    navigate('/')
  }
  return (
    <div className="container nav">
      <nav className="navbar fixed-top navbar-expand-md  bg-dark">
        <Link to="/" className="navbar-brand">
          <img
            className="logo d-inline-block align-top"
            src={logo}
            alt="Sway Logo"
          ></img>
          <span className="hidden">Sway</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars" style={{ color: 'white' }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link to="/meditate" className="nav-link">
                Meditate
              </Link>
            </li>
            <Link to="/meditate/timer" className="nav-link">
              Timer
            </Link>
            {isLoggedIn ? (
              <li>
                <Link to="/notes" className="nav-link">
                  Notes{' '}
                </Link>
              </li>
            ) : null}
            <Link to="/feed" className="nav-link">
              Community
            </Link>

            {isLoggedIn ? (
              <>
                <li>
                  <Link to="/profile" className="nav-link">
                    Profile
                  </Link>
                </li>
                <li>
                  <a href="" className="nav-link" onClick={handleLogout}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
