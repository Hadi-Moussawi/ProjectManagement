import { motion } from "framer-motion";
import {
  FaUsers,
  FaChartLine,
  FaHandshake,
  FaProjectDiagram,
} from "react-icons/fa";

export default function About() {
  const stats = [
    { value: "150+", label: "Projects Delivered", icon: <FaProjectDiagram /> },
    { value: "98%", label: "Client Satisfaction", icon: <FaHandshake /> },
    { value: "50+", label: "Teams Led", icon: <FaUsers /> },
    { value: "$10M+", label: "Budget Managed", icon: <FaChartLine /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Strategic Technology Leadership</h2>
          <p className="section-subtitle">
            Driving digital transformation through effective project governance
          </p>
        </motion.div>

        <div className="about-grid">
          {/* Leadership Metrics */}
          <motion.div
            className="metrics-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="metric-card">
                <div className="metric-icon">{stat.icon}</div>
                <div className="metric-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Leadership Philosophy */}
          <motion.div
            className="philosophy-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="philosophy-header">
              <h3>Leadership Approach</h3>
              <FaUsers className="philosophy-icon" />
            </div>
            <p className="philosophy-text">
              "Empowering cross-functional teams to deliver exceptional results
              through agile methodologies and strategic alignment. My focus is
              on creating value-driven partnerships between technical teams and
              business stakeholders."
            </p>
            <div className="leadership-pillars">
              <div className="pillar">
                <span>Agile Transformation</span>
              </div>
              <div className="pillar">
                <span>Stakeholder Alignment</span>
              </div>
              <div className="pillar">
                <span>Risk Mitigation</span>
              </div>
            </div>
          </motion.div>
          <div className="oversigh-tech">
            {/* Technical Oversight */}
            <motion.div
              className="tech-oversight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3>Technical Governance</h3>
              <div className="tech-stack">
                <div className="tech-category">
                  <h4>Web Technologies</h4>
                  <div className="tech-items">
                    <span>WordPress</span>
                    <span>React</span>
                    <span>Node.js</span>
                  </div>
                </div>
                <div className="tech-category">
                  <h4>Project Management</h4>
                  <div className="tech-items">
                    <span>Jira</span>
                    <span>ClickUp</span>
                    <span>MS Project</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              className="certifications-grid"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="certification-card">
                <h4>PMP® Certified</h4>
                <p>Project Management Institute</p>
              </div>
              <div className="certification-card">
                <h4>Certified Scrum Master</h4>
                <p>Scrum Alliance</p>
              </div>
              <div className="certification-card">
                <h4>ITIL 4 Specialist</h4>
                <p>AXELOS</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
