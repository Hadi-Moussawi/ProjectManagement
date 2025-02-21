import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegDotCircle,
} from "react-icons/fa";

export default function Experience() {
  const experience = [
    {
      company: "Tech Innovators Inc",
      role: "Senior Project Manager",
      duration: "2020 - Present",
      location: "New York, NY",
      achievements: [
        "Led $2M+ digital transformation projects",
        "Managed cross-functional teams of 15+ members",
        "Implemented Agile practices across 5 departments",
        "Reduced project delivery time by 30%",
      ],
    },
    {
      company: "Digital Solutions Corp",
      role: "Project Manager",
      duration: "2017 - 2020",
      location: "San Francisco, CA",
      achievements: [
        "Delivered 20+ enterprise web applications",
        "Mentored junior PM team of 8 members",
        "Introduced CI/CD pipeline reducing deployment time",
        "Achieved 98% client satisfaction rate",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            Strategic leadership driving digital excellence
          </p>
        </motion.div>

        <div className="timeline">
          {experience.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="timeline-marker">
                <FaRegDotCircle className="marker-icon" />
              </div>

              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="company">{item.company}</h3>
                  <div className="meta-info">
                    <span className="role">
                      <FaBriefcase className="meta-icon" />
                      {item.role}
                    </span>
                    <span className="duration">
                      <FaCalendarAlt className="meta-icon" />
                      {item.duration}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt className="meta-icon" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <ul className="achievement-list">
                  {item.achievements.map((achievement, idx) => (
                    <li key={idx} className="achievement-item">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
