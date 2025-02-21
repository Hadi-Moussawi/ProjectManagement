import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FiDownload, FiCalendar } from "react-icons/fi";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <div className="title-wrapper">
            <h1 className="name">Ghady Khoury</h1>
            <TypeAnimation
              sequence={[
                "Senior Project Manager",
                2000,
                "Agile Team Leader",
                2000,
                "Tech Strategy Consultant",
                2000,
              ]}
              wrapper="h2"
              speed={40}
              className="animated-title"
              repeat={Infinity}
            />
          </div>

          <p className="tagline">
            Transforming complex requirements into successful digital solutions
            through strategic leadership
          </p>

          <div className="cta-container">
            <a href="#contact" className="cta-btn primary">
              {/* <FiCalendar className="btn-icon" /> */}
              Schedule Consultation
            </a>
            <a href="/resume.pdf" download className="cta-btn secondary">
              {/* <FiDownload className="btn-icon" /> */}
              Download Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/src/assets/images/profile.png"
            alt="Ghady Khoury"
            className="profile-image"
          />
          <div className="experience-badge">
            <span className="years">12+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
}
