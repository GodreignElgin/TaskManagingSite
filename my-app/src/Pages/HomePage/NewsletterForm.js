import React from 'react';
import '../../Styles/HomePage/NewsletterForm.css';

function NewsletterForm() {
  return (
    <div className="newsletter-form">
      <div className="form-content">
        <h2>Get to know us more. Join our newsletter.</h2>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Join now</button>
        </form>
        
      </div>
    </div>
  );
}

export default NewsletterForm;

