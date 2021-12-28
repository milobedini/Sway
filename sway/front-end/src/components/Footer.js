import { Link } from 'react-router-dom'
import favicon2 from '../assets/Favicon 2.svg'

const Footer = () => {
  return (
    <div className="footer mt-auto bg-dark text-white pt-5 pb-4">
      <div className="container">
        <footer className="main-footer">
          <div>
            <h5 className="text-center">
              <Link to="/about">About</Link>
            </h5>
          </div>
          <div>
            <h4 className="text-center">
              <a
                href="https://www.linkedin.com/in/milo-bedini-794787154/"
                target="_blank"
                rel="noreferrer"
              >
                Created by Milo
              </a>
            </h4>
          </div>
          <div className="footer-logo  navbar-brand">
            <Link to="/">
              <span className="hidden">Footer</span>
              <img className="footer-logo " src={favicon2}></img>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Footer
