import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/home.scss'
import medPic from '../images/meditation.png'
import bookPic from '../images/book.png'
import cloudPic from '../images/cloud.png'
import timerPic from '../images/timer.png'
import progressPic from '../images/progress.png'

const Home = () => {
  return (
    <div className="home">
      <div className="top-section">
        <div className="background-wrapper">
          <div className="heading">
            <h2>Take a moment...</h2>
          </div>
          <div className="go-meditate">
            <div className="meditation-links">
              <Link to="/meditate/latest/">
                <button className="name noselect med-button">
                  Latest Meditation
                </button>
              </Link>
              <Link to="/meditate/guided/">
                <button className="name noselect med-button">
                  Browse Meditations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="rebalance">
          <Link to="/meditate/guided/">
            <img src={medPic} />
            <h3>Rebalance</h3>
            <h6>Check out some of our guided meditations.</h6>
          </Link>
        </div>
        <div className="refocus">
          <Link to="/feed">
            <img src={bookPic} />
            <h3>Refocus</h3>
            <h6>Engage with our community</h6>
          </Link>
        </div>
      </div>
      <div className="third-section"></div>
      <div className="fourth-section">
        <div className="notes">
          <Link to="/notes">
            <img src={cloudPic} />
            <h5>Your personal scribblings...</h5>
          </Link>
        </div>
        <div className="timer">
          <Link to="/meditate/timer">
            <img src={timerPic} />
            <h5>Meditation timer...</h5>
          </Link>
        </div>
        <div className="profile-progress">
          <Link to="/profile">
            <img src={progressPic} />
            <h5>Track your progress...</h5>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
