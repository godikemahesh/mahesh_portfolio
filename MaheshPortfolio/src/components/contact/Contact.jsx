import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import "./Contact.css"

function Contact() {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/mahesh-godike-647a12214/",
            icon: "💼",
            color: "#0077b5"
        },
        {
            name: "GitHub",
            url: "https://github.com/godikemahesh",
            icon: "🐙",
            color: "#333"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/+918008538015",
            icon: "💬",
            color: "#25d366"
        },
        {
            name: "Email",
            url: "maheshgodike17@gmail.com",
            icon: "📧",
            color: "#ea4335"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH');
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.log(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title"> Let's Connect</h2>
                    <p className="section-subtitle">Ready to build something amazing together?</p>
                </div>

                <div className="contact-content">
                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <div className="form-header">
                            <h3 className="form-title">Send me a message</h3>
                            <p className="form-subtitle">I'd love to hear about your project ideas</p>
                        </div>

                        <form className="contact-form" ref={form} onSubmit={sendEmail}>
                            <div className="form-group">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    className="form-input" 
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    className="form-input" 
                                    placeholder="your.email@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea 
                                    id="message"
                                    name="message" 
                                    className="form-textarea" 
                                    placeholder="Tell me about your project..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className="spinner"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <span className="btn-icon">🚀</span>
                                        Let's Build Something Together!
                                    </>
                                )}
                            </button>

                            {submitStatus === 'success' && (
                                <div className="status-message success">
                                    <span className="status-icon">✅</span>
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="status-message error">
                                    <span className="status-icon">❌</span>
                                    Something went wrong. Please try again or contact me directly.
                                </div>
                            )}
                        </form>
                    </div>

                    {/* Social Links */}
                    <div className="social-links-container">
                        <div className="social-header">
                            <h3 className="social-title">Connect with me</h3>
                            <p className="social-subtitle">Let's stay in touch</p>
                        </div>

                        <div className="social-links">
                            {socialLinks.map((link, index) => (
                                <a 
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                    style={{ '--link-color': link.color }}
                                >
                                    <div className="social-icon">{link.icon}</div>
                                    <div className="social-info">
                                        <span className="social-name">{link.name}</span>
                                        <span className="social-handle">
                                            {link.name === 'Email' ? 'maheshgodike17@gmail.com' : 
                                             link.name === 'WhatsApp' ? 'Direct Message' :
                                             link.name === 'LinkedIn' ? 'Mahesh Godike' :
                                             'mahesh-godike'}
                                        </span>
                                    </div>
                                    <div className="social-arrow">→</div>
                                </a>
                            ))}
                        </div>

                        {/* Quick Contact Info */}
                        <div className="quick-contact">
                            <div className="contact-item">
                                <span className="contact-icon">📧</span>
                                <div className="contact-details">
                                    <span className="contact-label">Email</span>
                                    <span className="contact-value">maheshgodike17@gmail.com</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">🌍</span>
                                <div className="contact-details">
                                    <span className="contact-label">Location</span>
                                    <span className="contact-value">Hyderabad, Telangana, India</span>
                                </div>
                            </div>
                            <div className="contact-item">
                                <span className="contact-icon">⏰</span>
                                <div className="contact-details">
                                    <span className="contact-label">Response Time</span>
                                    <span className="contact-value">Within 24 hours</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact