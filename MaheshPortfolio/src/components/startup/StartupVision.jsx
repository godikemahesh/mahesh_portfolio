import React, { useState, useEffect } from 'react'
import "./StartupVision.css"

function StartupVision() {
  const [activeCard, setActiveCard] = useState('privexa');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('startup-vision');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const startupData = {
    privexa: {
      title: "Privexa AI",
      subtitle: "Enterprise-Grade AI Solutions",
      description: "Enterprise-grade AI tailored for medical, legal, banking, and manufacturing sectors.",
      features: [
        "Private LLMs hosted on-premise or cloud",
        "Secure, compliant, and offline-ready AI solutions",
        "Multilingual, role-based access & audit trails",
        "Custom AI models for industry-specific needs"
      ],
      icon: "🏢",
      color: "#00d4ff",
      gradient: "linear-gradient(135deg, #00d4ff, #5b73ff)"
    },
    dataforge: {
      title: "Privexa DataForge",
      subtitle: "Smart Data Transformation",
      description: "Transform raw organizational data into smart, actionable insights with custom question-answer generation.",
      features: [
        "Upload diverse file formats (PDF, DOCX, PPT, JSON, images)",
        "Generate complex, simple, or reasoning-based Q&A datasets",
        "AI-powered automation for knowledge extraction",
        "Custom data processing pipelines"
      ],
      icon: "⚡",
      color: "#ff6b6b",
      gradient: "linear-gradient(135deg, #ff6b6b, #ff8e8e)"
    }
  };

  return (
    <section id="startup-vision" className="startup-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">🚀 Startup Vision</h2>
          <p className="section-subtitle">Empowering industries with secure, private, and intelligent AI solutions</p>
        </div>

        <div className={`startup-content ${isVisible ? 'visible' : ''}`}>
          {/* Mission Statement */}
          <div className="mission-statement">
            <div className="mission-card">
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                "Empowering industries with secure, private, and intelligent AI solutions that drive innovation 
                while maintaining the highest standards of data privacy and security."
              </p>
            </div>
          </div>

          {/* Startup Cards */}
          <div className="startup-cards">
            <div className="card-selector">
              <button 
                className={`selector-btn ${activeCard === 'privexa' ? 'active' : ''}`}
                onClick={() => setActiveCard('privexa')}
                style={{ '--btn-color': startupData.privexa.color }}
              >
                <span className="btn-icon">{startupData.privexa.icon}</span>
                <span className="btn-text">Privexa AI</span>
              </button>
              <button 
                className={`selector-btn ${activeCard === 'dataforge' ? 'active' : ''}`}
                onClick={() => setActiveCard('dataforge')}
                style={{ '--btn-color': startupData.dataforge.color }}
              >
                <span className="btn-icon">{startupData.dataforge.icon}</span>
                <span className="btn-text">DataForge</span>
              </button>
            </div>

            <div className="card-container">
              <div 
                className={`startup-card ${activeCard === 'privexa' ? 'active' : ''}`}
                style={{ '--card-gradient': startupData.privexa.gradient }}
              >
                <div className="card-header">
                  <div className="card-icon">{startupData.privexa.icon}</div>
                  <div className="card-title-section">
                    <h3 className="card-title">{startupData.privexa.title}</h3>
                    <p className="card-subtitle">{startupData.privexa.subtitle}</p>
                  </div>
                </div>
                
                <div className="card-body">
                  <p className="card-description">{startupData.privexa.description}</p>
                  
                  <div className="features-section">
                    <h4 className="features-title">Core Features</h4>
                    <ul className="features-list">
                      {startupData.privexa.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="industry-tags">
                    <span className="industry-tag">Medical</span>
                    <span className="industry-tag">Legal</span>
                    <span className="industry-tag">Banking</span>
                    <span className="industry-tag">Manufacturing</span>
                  </div>
                </div>
              </div>

              <div 
                className={`startup-card ${activeCard === 'dataforge' ? 'active' : ''}`}
                style={{ '--card-gradient': startupData.dataforge.gradient }}
              >
                <div className="card-header">
                  <div className="card-icon">{startupData.dataforge.icon}</div>
                  <div className="card-title-section">
                    <h3 className="card-title">{startupData.dataforge.title}</h3>
                    <p className="card-subtitle">{startupData.dataforge.subtitle}</p>
                  </div>
                </div>
                
                <div className="card-body">
                  <p className="card-description">{startupData.dataforge.description}</p>
                  
                  <div className="features-section">
                    <h4 className="features-title">Core Features</h4>
                    <ul className="features-list">
                      {startupData.dataforge.features.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <span className="feature-icon">✓</span>
                          <span className="feature-text">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="industry-tags">
                    <span className="industry-tag">Data Processing</span>
                    <span className="industry-tag">Knowledge Extraction</span>
                    <span className="industry-tag">Q&A Generation</span>
                    <span className="industry-tag">Automation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Demo Section */}
          <div className="demo-section">
            <h3 className="demo-title">Interactive Workflow</h3>
            <div className="workflow-demo">
              <div className="workflow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>Data Input</h4>
                  <p>Upload your documents and data sources</p>
                </div>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>AI Processing</h4>
                  <p>Intelligent analysis and knowledge extraction</p>
                </div>
              </div>
              <div className="workflow-arrow">→</div>
              <div className="workflow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>Smart Output</h4>
                  <p>Actionable insights and Q&A datasets</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="cta-section">
            <div className="cta-card">
              <h3 className="cta-title">Ready to Transform Your Business?</h3>
              <p className="cta-text">
                Let's collaborate to build AI solutions that drive your industry forward
              </p>
              <div className="cta-buttons">
                <button className="btn primary-btn">
                  <span className="btn-icon">🤝</span>
                  Collaborate with Me
                </button>
                <a 
                  href="https://privexa-ai.netlify.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn secondary-btn"
                >
                  <span className="btn-icon">📧</span>
                  Explore Privexa AI
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StartupVision
