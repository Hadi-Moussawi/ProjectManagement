import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Ghady's's leadership transformed our development process, delivering our platform 30% ahead of schedule while maintaining exceptional quality standards.",
      author: "Sarah Johnson",
      role: "CTO, Tech Innovators Inc",
      image: "client1.jpg",
    },
    {
      text: "Ghady's's leadership transformed our development process, delivering our platform 30% ahead of schedule while maintaining exceptional quality standards.",
      author: "Sarah Johnson",
      role: "CTO, Tech Innovators Inc",
      image: "client1.jpg",
    },
    {
      text: "Ghady's's leadership transformed our development process, delivering our platform 30% ahead of schedule while maintaining exceptional quality standards.",
      author: "Sarah Johnson",
      role: "CTO, Tech Innovators Inc",
      image: "client1.jpg",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div id="testimonials" className="testimonials-section">
      <div className="testimonails-content">
        <div className="section-header">
          <h2 className="section-title">Client & Team Endorsements</h2>
          <p className="section-subtitle">
            Professional recognition of leadership impact
          </p>
        </div>

        <div className="carousel-wrapper">
          <button className="nav-btn prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="carousel-container">
            <AnimatePresence mode="wait">
              {testimonials.map(
                (testimonial, index) =>
                  index === activeIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                      className="testimonial-card"
                    >
                      <div className="quote-icon">
                        <FaQuoteLeft />
                      </div>
                      <p className="testimonial-text">{testimonial.text}</p>
                      <div className="client-info">
                        <img
                          src={`/src/assets/images/${testimonial.image}`}
                          alt={testimonial.author}
                          className="client-image"
                        />
                        <div className="client-details">
                          <h3 className="client-name">{testimonial.author}</h3>
                          <p className="client-role">{testimonial.role}</p>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          <button className="nav-btn next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
