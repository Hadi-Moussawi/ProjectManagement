import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"; //  FiSend,

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Purely visual submission
    e.target.reset();
  };

  return (
    <div id="contact" className="contact-section">
      <div className="container container-mobile">
        <div className="contact-grid">
          <motion.form
            onSubmit={handleSubmit}
            className="contact-form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <motion.div
                className="section-header-contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">
                  Ready to discuss your next strategic initiative
                </p>
              </motion.div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="form-input"
              />
              <span className="input-border"></span>
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="form-input"
              />
              <span className="input-border"></span>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="form-input"
              ></textarea>
              <span className="input-border"></span>
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <FiSend className="btn-icon" /> */}
              Send Message
            </motion.button>
          </motion.form>

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="info-card">
              <h3>Direct Contact</h3>

              <div className="contact-method">
                <FaRegEnvelope className="method-icon" />
                <div>
                  <span>Email</span>
                  <a href="mailto:contact@ghadykhoury.com">
                    contact@ghadykhoury.com
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <FaPhone className="method-icon" />
                <div>
                  <span>Phone</span>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-method">
                <FaMapMarkerAlt className="method-icon" />
                <div>
                  <span>Location</span>
                  <p>New York, NY</p>
                </div>
              </div>

              <div className="social-links">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin className="social-icon" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub className="social-icon" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
