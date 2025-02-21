import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaRegArrowAltCircleUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer-section">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-grid">
            <div className="footer-about">
              <h3 className="footer-heading">Ghady Khoury</h3>
              <p className="footer-text">
                Strategic technology leader specializing in digital
                transformation and high-performance team building
              </p>
            </div>

            <div className="footer-links">
              <h4 className="footer-subheading">Quick Links</h4>
              <ul className="link-list">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4 className="footer-subheading">Connect</h4>
              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">
              © {new Date().getFullYear()} Ghady Khoury. All rights reserved.
            </p>
          </div>
        </motion.div>

        <motion.button
          className="back-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaRegArrowAltCircleUp />
        </motion.button>
      </div>
    </footer>
  );
}
