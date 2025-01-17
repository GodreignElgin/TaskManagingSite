import React from 'react';
import '../../Styles/HomePage/Navbar.css';
import manage from '../../Assets/Images/manage.jpeg';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  
  const navigate = useNavigate();
 
  const handleGetStarted = () => {
    navigate('/login');
  }

  return (  
    <nav className="navbar">
      <div className="logo">
        <div className='logo-img'>
        <img src={manage} alt="FlowUpTeam Logo" 
        style={{
          borderRadius: '50%',
          boxShadow: '2px 2px 10px 2px white',
        }} className='logo-h'/>
        </div>
      </div>
      <ul className="nav-links">  
        <li><a href="/">Home</a></li>
        <li><a href="/summary">Product</a></li>
        <li><a href="/pricing">Pricing</a></li>
      </ul>
      <button className="get-started-btn"
      onClick={handleGetStarted}>Get Started</button>
    </nav>
  );
}  

export default Navbar;
