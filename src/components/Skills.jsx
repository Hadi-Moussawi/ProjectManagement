import { motion } from "framer-motion";
import {
  FaUsers,
  FaProjectDiagram,
  FaChartLine,
  FaTasks,
  FaTools,
  FaCode,
  FaRocket,
} from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Project Management",
      icon: <FaProjectDiagram />,
      skills: [
        "Agile Transformation",
        "Stakeholder Management",
        "Risk Mitigation",
        "Budget Forecasting",
      ],
    },
    {
      title: "Technical Leadership",
      icon: <FaUsers />,
      skills: [
        "Team Building",
        "SDLC Oversight",
        "Architecture Review",
        "DevOps Implementation",
      ],
    },
    {
      title: "Agile Methodologies",
      icon: <FaRocket />,
      skills: [
        "Scrum Master",
        "Sprint Planning",
        "SAFe Framework",
        "Continuous Improvement",
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools />,
      skills: [
        "Jira/Confluence",
        "Azure DevOps",
        "CI/CD Pipelines",
        "Monitoring Systems",
      ],
    },
    {
      title: "Technical Expertise",
      icon: <FaCode />,
      skills: [
        "Cloud Architecture",
        "API Design",
        "Microservices",
        "System Integration",
      ],
    },
    {
      title: "Business Growth",
      icon: <FaChartLine />,
      skills: [
        "ROI Analysis",
        "Client Acquisition",
        "Vendor Management",
        "Strategic Planning",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">
            Leadership & Technical Proficiencies
          </h2>
          <p className="section-subtitle">
            Strategic capabilities driving digital transformation
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-header">
                <div className="card-icon">{category.icon}</div>
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
