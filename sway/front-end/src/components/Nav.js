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
            <Link to="/meditate" className="nav-link">
              <li
                data-bs-toggle="collapse"
                data-bs-target="#toggleMobileMenu"
                aria-controls="toggleMobileMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Meditate
              </li>
            </Link>
            <Link to="/meditate/timer" className="nav-link">
              <li
                data-bs-toggle="collapse"
                data-bs-target="#toggleMobileMenu"
                aria-controls="toggleMobileMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Timer
              </li>
            </Link>
            {isLoggedIn ? (
              <Link to="/notes" className="nav-link">
                <li
                  data-bs-toggle="collapse"
                  data-bs-target="#toggleMobileMenu"
                  aria-controls="toggleMobileMenu"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Notes
                </li>
              </Link>
            ) : null}
            <Link to="/feed" className="nav-link">
              <li
                data-bs-toggle="collapse"
                data-bs-target="#toggleMobileMenu"
                aria-controls="toggleMobileMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                Community
              </li>
            </Link>

            {isLoggedIn ? (
              <>
                <Link to="/profile" className="nav-link">
                  <li
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Profile
                  </li>
                </Link>
                <li>
                  <a
                    href=""
                    className="nav-link"
                    onClick={handleLogout}
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  <li
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Login
                  </li>
                </Link>
                <Link to="/register" className="nav-link">
                  <li
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    Register
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
