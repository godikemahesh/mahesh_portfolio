import React, { useState } from 'react'
import "./Projects.css"
import scripturesImg from "/src/assets/Krishna-Arjuna.jpg";
import smartbusImg from "/src/assets/smart_bus.png";
import tradeImg from "/src/assets/trade_advisor.png";
import smartcartImg from "/src/assets/smart_cart.png";
import lpgImg from "/src/assets/smart_lpg.png";
function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Smart Cart",
      tagline: "AI-Powered Shopping Assistant",
      description: "Smart Cart is an AI-powered shopping assistant that helps users compare products across multiple e-commerce platforms with just one click. Users can simply upload or capture a photo of a product, and Smart Cart intelligently identifies it using AI vision models.",
      features: [
        "AI Vision Product Recognition",
        "Multi-platform Price Comparison",
        "Smart Chat Interface",
        "Real-time Deal Detection"
      ],
      tech: ["Python", "Computer Vision", "Machine Learning", "Flutter"],
      image: smartcartImg,
      demo: "https://smartcart-demo.com",
      github: "https://github.com/mahesh/smartcart"
    },
    {
      id: 2,
      title: "Ask Scriptures",
      tagline: "Spiritual AI Chatbot",
      description: "Ask Scriptures is a spiritual AI chatbot trained on the Bhagavad Gita, designed to provide wisdom, guidance, and answers to life's questions through sacred knowledge. It uses Retrieval-Augmented Generation (RAG) in the backend.",
      features: [
        "RAG-based Knowledge Retrieval",
        "Sacred Text Analysis",
        "Context-aware Responses",
        "Spiritual Guidance System"
      ],
      tech: ["Python", "RAG", "LLMs", "NLP"],
      image: scripturesImg,
      demo: "https://suraj-ask-gita.streamlit.app/",
      github: "https://github.com/godikemahesh/Ask_scriptures"
    },
    {
      id: 3,
      title: "Smart LPG Detection",
      tagline: "IoT Gas Leak Prevention System",
      description: "Smart Gas Leak Detection and Pre-Alert System that prevents accidents caused by unnoticed LPG leaks, especially in low-income households. Uses IoT sensors and machine learning to identify leaks in real time.",
      features: [
        "Real-time Leak Detection",
        "IoT Sensor Integration",
        "Auto-shutoff Valve",
        "Mobile Alert System"
      ],
      tech: ["IoT", "Machine Learning", "Embedded Systems", "Python"],
      image: lpgImg,
      demo: "https://smartlpg-demo.com",
      github: "https://github.com/mahesh/smartlpg"
    },
    {
      id: 4,
      title: "Privexa Trade Advisor",
      tagline: "AI-Powered Financial Assistant",
      description: "Privexa Trade Advisor is an AI-powered financial assistant designed to simplify stock market analysis and trading decisions. It intelligently combines real-time market data, historical trends, and financial news sentiment.",
      features: [
        "Real-time Market Analysis",
        "Sentiment Analysis",
        "Risk Assessment",
        "Personalized Recommendations"
      ],
      tech: ["Python", "LLMs", "Financial APIs", "Machine Learning"],
      image: tradeImg,
      demo: "https://privexa-demo.com",
      github: "https://github.com/mahesh/privexa"
    },
    {
      id: 5,
      title: "Smart Hyderabad Bus Advisor",
      tagline: "AI-Powered Travel Assistant",
      description: "Hyderabad City Bus Advisor is an AI-powered travel assistant designed to help passengers and newcomers navigate Hyderabad effortlessly. It suggests the best bus routes, including direct and transfer options, with detailed stops, timings, and frequencies.",
      features: [
        "Intelligent Route Mapping",
        "Live Bus Tracking",
        "Multi-modal Transport Comparison",
        "Real-time Arrival Predictions"
      ],
      tech: ["Python", "LLMs", "Real-time APIs", "Route Optimization"],
      image: smartbusImg,
      demo: "https://hyderabad-bus-demo.com",
      github: "https://github.com/mahesh/hyderabad-bus-advisor"
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🚀 Projects Showcase</h2>
          <p className="section-subtitle">Innovative AI solutions that make a difference</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <span className="view-demo">View Demo</span>
                </div>
              </div>

              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                <p className="project-description">{project.description.substring(0, 120)}...</p>
                
                <div className="project-tech">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-tag more">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-tagline">{selectedProject.tagline}</p>
            </div>

            <div className="modal-body">
              <div className="modal-image">
                <div className="project-placeholder large">
                  <div className="project-icon"><img src={selectedProject.image} alt={selectedProject.title} className="project-img" /></div>
                </div>
              </div>

              <div className="modal-info">
                <div className="modal-description">
                  <h3>About This Project</h3>
                  <p>{selectedProject.description}</p>
                </div>

                <div className="modal-features">
                  <h3>Key Features</h3>
                  <ul>
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-tech">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.tech.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="btn primary-btn">
                    Live Demo
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn secondary-btn">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
