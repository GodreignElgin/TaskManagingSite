import React from 'react';
import './Tasker.css';
import imgg from '../../Assets/Images/logo.jpg';

const Tasker = () => {
  return (
    <div className="container">
      <header className="header">
        <h1 className="logo">Tasker</h1>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/benefits">Benefits</a></li>
            <li><a href="/reviews">Reviews</a></li>
          </ul>
        </nav>
        <div className="actions">
          <button className="login-btn">Login</button>
          <button className="try-free-btn">Try for Free</button>
        </div>
      </header>
      <main className="content">
        <h2 className="headline">Take Control Of Your Tasks</h2>
        <div className="task-board-container">
          <div className="task-board">
            {/* Placeholder for task board content */}
            <p>Task Board</p>
          </div>
          <p className="track-text">Track</p>
        </div>
        <p className="description">Tasker platform helps you stay on top of your tasks and track your time efficiently.</p>
        <div className='home-dashboard-image'>
            <img src={imgg} alt='fghj' className='imagee'></img>
        </div>
      </main>
    </div>
  );
};

export default Tasker;