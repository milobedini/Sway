import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <footer>
        <h4>
          <Link to="/about">About</Link>
        </h4>
        <h5>
          <a
            href="https://www.linkedin.com/in/milo-bedini-794787154/"
            target="_blank"
            rel="noreferrer"
          >
            Created by Milo
          </a>
        </h5>
      </footer>
    </div>
  )
}

export default Footer
