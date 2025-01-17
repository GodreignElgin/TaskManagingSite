import React from 'react';
import '../../Styles/HomePage/Hero.css';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../Assets/Images/hero.jpg';
import blackHand from '../../LottieFiles/black-hand.json';
import Lottie from 'react-lottie';

function Hero() {

  const navigate = useNavigate();

  const handleGetDemo = () => {
    navigate('./admin');
  };

  const defaultOptions = {
    loop:true,
    autoplay: true,
    animationData : blackHand,
    renderSettings : {
      preserveAspectRatio : "xMidYMid slice"
    }
  };

  return (
    <section className="hero">
      <Lottie options = {defaultOptions} width={400} height={400} />
    <div className="hero-content">
        <h1 className='head1'>Simplify your life with Task<span className='head1-clo'> Manager</span></h1>
        <p className='para1'>A task management system transforms how you work by organizing tasks, setting priorities, and tracking progress. It helps you stay on top of your responsibilities, reduces stress, and boosts productivity. Embrace organized work and watch your efficiency soar.</p>
        <div className="buttons">
          <button onClick={handleGetDemo} className="get-demo-button">Get Demo</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
