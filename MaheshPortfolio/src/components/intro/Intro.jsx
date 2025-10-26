import React, { useEffect, useState } from 'react'
import "./Intro.css"
import bg from "/src/assets/mahesh_image.jpg"
import btnImg from "../../assets/hireme.png"
import { Link } from 'react-scroll';

function Intro() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Create animated particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="intro" className="hero-section">
      {/* Animated Background Particles */}
      <div className="particles-container">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${particle.speed}s`
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="introContent">
          <div className="tagline-container">
            <span className="hello">Hello, I'm</span>
            <span className="introName">Mahesh Godike</span>
            <span className="tagline">Building AI for Tomorrow</span>
          </div>
          <p className="introPara">
            Student • Developer • Entrepreneur<br />
            Crafting intelligent solutions that shape the future
          </p>
          <div className="hero-buttons">
            <Link to="projects" smooth={true} duration={1000}>
              <button className="btn primary-btn">
                <img src={btnImg} alt="Hire" className='btnImg'/> 
                View My Work
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={1000}>
              <button className="btn secondary-btn">
                Let's Collaborate
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={bg} alt="Mahesh Godike" className="bg" />
          <div className="image-glow"></div>
        </div>
      </div>
    </section>
  )
}
export default Intro
