import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
// import { FiChevronRight } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Portfolio", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-content header-responsive">
        <a href="#hero" className="logo">
          <span className="logo-gradient">GK</span>
          {/* <span className="logo-text">Ghady Khoury</span> */}
        </a>

        <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          {/* <button className="menu-close" onClick={() => setIsMenuOpen(false)}>
            <FaTimes />
          </button> */}

          <div className="nav-items">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link"
                onClick={() => setIsMenuOpen(false)}
                style={{ "--i": index }}
              >
                {/* <FiChevronRight className="nav-arrow" /> */}
                {link.name}
              </a>
            ))}
          </div>

          <div className="mobile-socials">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </nav>

        <div className="desktop-socials">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
