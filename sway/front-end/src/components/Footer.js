import { Link } from 'react-router-dom'
// import logo from '../assets/Logo.svg'
import favicon2 from '../assets/Favicon 2.svg'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <footer>
          <div className="bottom-row">
            <div className="about">
              <h4>
                <Link to="/about">About</Link>
              </h4>
            </div>
            <div className="created">
              <h5>
                <a
                  href="https://www.linkedin.com/in/milo-bedini-794787154/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Created by Milo
                </a>
              </h5>
            </div>
            <div className="footer-logo">
              <img src={favicon2}></img>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
