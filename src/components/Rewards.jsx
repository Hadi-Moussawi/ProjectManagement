import { motion } from "framer-motion";
import { FaTrophy, FaAward, FaCertificate, FaMedal } from "react-icons/fa";

export default function Rewards() {
  const achievements = [
    {
      title: "Excellence in Tech Leadership",
      issuer: "Global Tech Awards",
      year: "2023",
      icon: <FaTrophy />,
      category: "leadership",
    },
    {
      title: "Top Project Manager",
      issuer: "PMI Chapter",
      year: "2022",
      icon: <FaMedal />,
      category: "management",
    },
    {
      title: "Top Project Manager",
      issuer: "PMI Chapter",
      year: "2022",
      icon: <FaMedal />,
      category: "management",
    },
    {
      title: "Top Project Manager",
      issuer: "PMI Chapter",
      year: "2022",
      icon: <FaMedal />,
      category: "management",
    },
  ];

  return (
    <div id="rewards" className="rewards-section">
      <div className="container container-mobile">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Accolades & Recognition</h2>
          <p className="section-subtitle">
            Industry validation of professional excellence
          </p>
        </motion.div>

        <div className="rewards-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="reward-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-header">
                <div className="reward-icon">{achievement.icon}</div>
                <div className="reward-meta">
                  <span className="issuer">{achievement.issuer}</span>
                  <span className="year">{achievement.year}</span>
                </div>
              </div>
              <h3 className="title">{achievement.title}</h3>
              <div className="category-tag">{achievement.category}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
