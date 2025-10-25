import React, { useState, useEffect } from 'react';
import './About.css';

function About() {
    const [visibleElements, setVisibleElements] = useState([]);
    const [currentBioLine, setCurrentBioLine] = useState(0);

    const bioLines = [
        "I'm Mahesh Godike, a passionate AI developer and entrepreneur",
        "Founder of Privexa AI - building Enterprise-Grade Private LLM Solutions",
        "Creating secure, industry-tailored AI models for healthcare, banking, law, and manufacturing",
        "Student • Developer • Entrepreneur - merging innovation with real-world impact",
        "Transforming complex AI concepts into simple, intelligent solutions"
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements(prev => [...prev, entry.target.id]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        // Observe all sections
        const sections = document.querySelectorAll('.about-section');
        sections.forEach(section => observer.observe(section));

        // Animate bio lines
        const bioInterval = setInterval(() => {
            setCurrentBioLine(prev => (prev + 1) % bioLines.length);
        }, 3000);

        return () => {
            sections.forEach(section => observer.unobserve(section));
            clearInterval(bioInterval);
        };
    }, []);

    return (
        <section className="about-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">💼 About Me</h2>
                    <p className="section-subtitle">Student • Developer • Entrepreneur</p>
                </div>

                {/* Dynamic Bio Section */}
                {/* <div className="bio-section">
                    <div className="bio-container">
                        <div className="bio-lines">
                            {bioLines.map((line, index) => (
                                <p 
                                    key={index}
                                    className={`bio-line ${currentBioLine === index ? 'active' : ''}`}
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    {line}
                                </p>
                            ))}
                        </div>
                    </div>
                </div> */}

                {/* About Me Content */}
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm Mahesh Godike, a passionate AI developer and entrepreneur dedicated to building intelligent solutions that make a real difference. As the founder of Privexa AI, I specialize in creating enterprise-grade private LLM solutions tailored for industries like healthcare, banking, law, and manufacturing. My journey combines academic excellence with practical innovation, transforming complex AI concepts into accessible, secure, and impactful applications. I believe in the power of technology to solve real-world problems while maintaining the highest standards of privacy and security. Through my work, I'm committed to bridging the gap between cutting-edge AI research and practical business solutions that drive meaningful change.
                        </p>
                    </div>
                </div>

                {/* Identity Showcase */}
                <div className="identity-section">
                    <h3 className="identity-title">My Identity</h3>
                    <div className="identity-cards">
                        <div className="identity-card student">
                            <div className="identity-icon">🎓</div>
                            <h4>Student</h4>
                            <p>Continuously learning and exploring new technologies</p>
                        </div>
                        <div className="identity-card developer">
                            <div className="identity-icon">💻</div>
                            <h4>Developer</h4>
                            <p>Building innovative AI solutions and applications</p>
                        </div>
                        <div className="identity-card entrepreneur">
                            <div className="identity-icon">🚀</div>
                            <h4>Entrepreneur</h4>
                            <p>Transforming ideas into impactful business solutions</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
