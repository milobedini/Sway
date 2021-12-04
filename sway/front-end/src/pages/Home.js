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
            <p>Meditate, or explore the rest of Sway.</p>
            <div className="meditation-links">
              <Link to="/meditate/guided/">
                <button>Latest Meditation</button>
              </Link>
              <Link to="/meditate/guided/">
                <button>Browse Meditations</button>
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
            <h6>Take a look at our feed for insights and inspirations</h6>
          </Link>
        </div>
      </div>
      <div className="third-section"></div>
      <div className="fourth-section">
        <div className="notes">
          <Link to="/notes">
            <img src={cloudPic} />
            <h4>Your personal scribblings...</h4>
          </Link>
        </div>
        <div className="timer">
          <Link to="/meditate/timer">
            <img src={timerPic} />
            <h4>Meditation timer...</h4>
          </Link>
        </div>
        <div className="progress">
          <Link to="/profile">
            <img src={progressPic} />
            <h4>Track your progress...</h4>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home
