import React, { useState, useEffect } from 'react'
import "./Skills.css"

function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skills = [
    { name: "Python", category: "Programming", icon: "🐍", projects: ["Smart Cart", "Ask Scriptures", "Privexa Trade"] },
    { name: "Machine Learning", category: "AI/ML", icon: "🤖", projects: ["Smart Cart", "LPG Detection", "Trade Advisor"] },
    { name: "Deep Learning", category: "AI/ML", icon: "🧠", projects: ["Computer Vision", "NLP Models"] },
    { name: "Computer Vision", category: "AI/ML", icon: "👁️", projects: ["Smart Cart", "Product Recognition"] },
    { name: "PyTorch", category: "Frameworks", icon: "🔥", projects: ["Deep Learning Models", "Neural Networks"] },
    { name: "TensorFlow", category: "Frameworks", icon: "📊", projects: ["ML Pipelines", "Model Training"] },
    { name: "Flutter", category: "Mobile", icon: "📱", projects: ["Smart Cart App", "Mobile Interfaces"] },
    { name: "LLMs", category: "AI/ML", icon: "💬", projects: ["Ask Scriptures", "Trade Advisor"] },
    { name: "Transformers", category: "AI/ML", icon: "🔄", projects: ["NLP Models", "Text Processing"] },
    { name: "RAG", category: "AI/ML", icon: "🔍", projects: ["Ask Scriptures", "Knowledge Retrieval"] },
    { name: "GANs", category: "AI/ML", icon: "🎨", projects: ["Generative Models", "Image Synthesis"] },
    { name: "Embedded Systems", category: "Hardware", icon: "⚡", projects: ["LPG Detection", "IoT Devices"] },
    { name: "Generative AI", category: "AI/ML", icon: "✨", projects: ["Content Generation", "Creative AI"] }
  ];

  useEffect(() => {
    // Animate skills on mount
    const timer = setTimeout(() => {
      setAnimatedSkills(skills.map(skill => skill.name));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      "Programming": "#00d4ff",
      "AI/ML": "#5b73ff",
      "Frameworks": "#ff6b6b",
      "Mobile": "#4ecdc4",
      "Hardware": "#ffe66d"
    };
    return colors[category] || "#ffffff";
  };

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🛠️ Skills Playground</h2>
          <p className="section-subtitle">Technologies I work with to build the future</p>
        </div>

        <div className="skills-container">
          {/* Core Skills Grid */}
          <div className="radial-skills">
            <h3 className="skills-subtitle">Core Expertise</h3>
            <div className="radial-chart">
              {skills.slice(0, 6).map((skill, index) => (
                <div 
                  key={skill.name}
                  className="radial-skill"
                  style={{
                    '--index': index,
                    '--color': getCategoryColor(skill.category)
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-circle">
                    <div className="skill-icon">{skill.icon}</div>
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Skills Grid */}
          <div className="skills-grid">
            <h3 className="skills-subtitle">All Technologies</h3>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className={`skill-item ${animatedSkills.includes(skill.name) ? 'animated' : ''}`}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    '--skill-color': getCategoryColor(skill.category)
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-category">{skill.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill Tooltip */}
        {hoveredSkill && (
          <div className="skill-tooltip">
            <div className="tooltip-header">
              <span className="tooltip-icon">{hoveredSkill.icon}</span>
              <span className="tooltip-name">{hoveredSkill.name}</span>
            </div>
            <div className="tooltip-category">{hoveredSkill.category}</div>
            <div className="tooltip-projects">
              <strong>Used in:</strong>
              <ul>
                {hoveredSkill.projects.map((project, idx) => (
                  <li key={idx}>{project}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Skills Categories */}
        <div className="skills-categories">
          <h3 className="skills-subtitle">Technology Categories</h3>
          <div className="category-stats">
            {Object.entries(
              skills.reduce((acc, skill) => {
                acc[skill.category] = (acc[skill.category] || 0) + 1;
                return acc;
              }, {})
            ).map(([category, count]) => (
              <div key={category} className="category-item">
                <div 
                  className="category-dot"
                  style={{ backgroundColor: getCategoryColor(category) }}
                ></div>
                <span className="category-name">{category}</span>
                <span className="category-count">{count} skills</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills