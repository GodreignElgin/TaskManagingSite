import React, { useState } from 'react';
import '../../Styles/HomePage/Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic for handling subscription
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-left">
          <img src="/path/to/your/logo.png" alt="FlowUpTeam Logo" className="footer-logo" />
          <p className="footer-description">Join our newsletter to stay up to date on features and releases.</p>
          <form onSubmit={handleSubmit} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required 
            />
            <button type="submit" className="newsletter-button">Join now</button>
          </form>
          {isSubscribed && <p className="success-message">Thank you for subscribing!</p>}
          <p className="footer-privacy">
            By subscribing you agree to our <a href="/privacy-policy">Privacy Policy</a> and consent to receive updates from our company.
          </p>
        </div>
        <div className="footer-right">
          <h3>Contact Us</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 1234 Street Name, City, Country</li>
            <li><i className="fas fa-phone"></i> +1 234 567 890</li>
            <li><i className="fas fa-envelope"></i> contact@example.com</li>
          </ul>
          <div className="social-media">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
