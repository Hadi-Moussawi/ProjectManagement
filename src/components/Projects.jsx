import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFilter,
  FaCode,
  FaUsers,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

export default function Projects() {
  const [selectedCategories, setSelectedCategories] = useState(new Set());

  const categories = [
    { id: "web", name: "Web Development", icon: <FaCode /> },
    { id: "leadership", name: "Team Leadership", icon: <FaUsers /> },
    { id: "agile", name: "Agile Transformation", icon: <FaRocket /> },
    { id: "strategy", name: "Business Strategy", icon: <FaChartLine /> },
  ];

  const projects = [
    {
      title: "Enterprise SaaS Platform",
      description: "Led development of cloud-based solution serving 50k+ users",
      tags: ["web", "leadership", "agile"],
      image: "project1.jpg",
      role: "Lead Project Manager",
      impact: "Increased client revenue by 40%",
    },
    {
      title: "Enterprise SaaS Platform",
      description: "Led development of cloud-based solution serving 50k+ users",
      tags: ["web", "leadership", "agile"],
      image: "project1.jpg",
      role: "Lead Project Manager",
      impact: "Increased client revenue by 40%",
    },
    {
      title: "Enterprise SaaS Platform",
      description: "Led development of cloud-based solution serving 50k+ users",
      tags: ["web", "leadership", "agile"],
      image: "project1.jpg",
      role: "Lead Project Manager",
      impact: "Increased client revenue by 40%",
    },
    {
      title: "Enterprise SaaS Platform",
      description: "Led development of cloud-based solution serving 50k+ users",
      tags: ["web", "leadership", "agile"],
      image: "project1.jpg",
      role: "Lead Project Manager",
      impact: "Increased client revenue by 40%",
    },
  ];

  const toggleCategory = (categoryId) => {
    const newCategories = new Set(selectedCategories);
    if (newCategories.has(categoryId)) {
      newCategories.delete(categoryId);
    } else {
      newCategories.add(categoryId);
    }
    setSelectedCategories(newCategories);
  };

  const filteredProjects =
    selectedCategories.size === 0
      ? projects
      : projects.filter((project) =>
          project.tags.some((tag) => selectedCategories.has(tag))
        );

  return (
    <div id="projects" className="projects-section">
      <div className="container container-mobile">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="section-title">Strategic Initiatives</h2>
          <p className="section-subtitle">
            Delivering measurable business impact through technology
          </p>
        </motion.div>

        <div className="filters">
          <div className="filter-header">
            <FaFilter />
            <h3>Filter by Expertise:</h3>
          </div>
          <div className="category-buttons">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                className={`category-btn ${
                  selectedCategories.has(category.id) ? "active" : ""
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="projects-grid"
          layout
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="card-header">
                <img
                  src={`/src/assets/images/projects/${project.image}`}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-tags">
                  {project.tags.map((tag) => {
                    const category = categories.find((c) => c.id === tag);
                    return (
                      <span
                        key={tag}
                        className="tag"
                        style={{ background: category.color }}
                      >
                        {category.icon}
                        {category.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="card-body">
                <h3>{project.title}</h3>
                <p className="description">{project.description}</p>
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{project.role}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Impact</span>
                    <span className="meta-value highlight">
                      {project.impact}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
