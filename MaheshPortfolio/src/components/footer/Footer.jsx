import React from 'react'
import "./Footer.css"

function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Startup", href: "#startup" },
        { name: "Contact", href: "#contact" }
    ];

    const socialLinks = [
        { name: "LinkedIn", url: "https://www.linkedin.com/in/mahesh-godike-647a12214/", icon: "💼" },
        { name: "GitHub", url: "https://github.com/godikemahesh", icon: "🐙" },
        { name: "WhatsApp", url: "https://wa.me/+918008538015", icon: "💬" },
        { name: "Email", url: "maheshgodike17@gmail.com", icon: "📧" }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Footer Brand */}
                    <div className="footer-brand">
                        <h3 className="footer-logo">Mahesh Godike</h3>
                        <p className="footer-tagline">Building AI for Tomorrow</p>
                        <p className="footer-description">
                            Student • Developer • Entrepreneur<br />
                            Crafting intelligent solutions that shape the future
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-title">Quick Links</h4>
                        <ul className="footer-list">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="footer-link">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <h4 className="footer-title">Connect</h4>
                        <div className="social-icons">
                            {socialLinks.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    title={social.name}
                                >
                                    <span className="icon-emoji">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-title">Get In Touch</h4>
                        <div className="contact-info">
                            <p className="contact-item">
                                <span className="contact-icon">📧</span>
                                maheshgodike17@gmail.com
                            </p>
                            <p className="contact-item">
                                <span className="contact-icon">🌍</span>
                                India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Made with <span className="heart">❤️</span> and creativity by 
                            <span className="author"> Mahesh Godike</span>
                        </p>
                    </div>
                    <div className="footer-tech">
                        <p>Built with React, Vite & lots of ☕</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
