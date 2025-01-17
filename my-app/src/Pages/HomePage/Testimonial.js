import React from 'react';
import '../../Styles/HomePage/Testimonial.css';

function Testimonial() {
  return (
    <section className="testimonial">
      <h2 className="testimonial-title">TESTIMONIALS</h2>
      <p className="testimonial-description">We believe FlowUp is the best tool out there. But, listen to our happy clients.</p>

      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="card-left">
            <div className="percentage">75.54%</div>
            <p className="improvement-text">Team satisfaction improvement</p>
          </div>
          <div className="card-right">
            <div className="rating">★★★★★</div>
            <p className="testimonial-quote">"I'm using FlowUp Team to manage my team of accountants and it has been a game changer."</p>
            <p className="client-name">John Doe</p>
            <p className="client-position">CFO, Example Corp</p>
          </div>
        </div>

        {/* Add more testimonial cards as needed */}
        <div className="testimonial-card">
          <div className="card-left">
            <div className="percentage">85.32%</div>
            <p className="improvement-text">Productivity increase</p>
          </div>
          <div className="card-right">
            <div className="rating">★★★★★</div>
            <p className="testimonial-quote">"FlowUp has streamlined our processes and improved productivity across the board."</p>
            <p className="client-name">Jane Smith</p>
            <p className="client-position">CEO, Tech Innovators</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
