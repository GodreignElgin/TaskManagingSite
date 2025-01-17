import React from 'react';
import '../../Styles/HomePage/HeroColumnWrapper.css';
import { useNavigate } from 'react-router-dom';

function HeroColumnWrapper() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('./login');
  };

  return (
    <div className="hero-column-wrapper">
      <div className='bg-sample-image'>
        <img 
          src="https://media.licdn.com/dms/image/C4D12AQH3moW8i3ewrw/article-cover_image-shrink_600_2000/0/1628589993746?e=2147483647&v=beta&t=x0r-d-0VMlcRA_l3hQGm6RBCel5ZrQrV1KkIE6N167g" 
          alt="background" 
          className="background-image"
        />
      </div>
      <div className='content'>
        <h1 className='fline'>Time is Money-<span className='span'>-Spend it Wisely!</span></h1>
        <p className='sline'>
          Manage your work, timelines, and teammates all at once. Set and follow timelines, assign tasks, and keep your projects in check.
        </p>
        <div className="button-container">
          <button onClick={handleGetStarted} className="get-started-button">Get started →</button>
        </div>
      </div>
    </div>
  );
}

export default HeroColumnWrapper;
