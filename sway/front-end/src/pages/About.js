import '../styles/about.scss'
import milopic from '../images/milopic.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-heading">
        <h1>About</h1>
        <p>
          This project was created using Django and React over a 1-week period.
        </p>
      </div>
      <div className="Milo">
        <div className="links">
          <p>
            <a
              href="https://github.com/milobedini"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/milo-bedini-794787154/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
        <img src={milopic} alt="Milo" />
      </div>
    </div>
  )
}

export default About
