import React from 'react'
import '../../Styles/AdminPanel/MainContent.css';
import SideBar from './SideBar';
import RSideContent from './RSideContent';

const MainContent = () => {
  return (
    <div className='mainContent'>
      <SideBar/>
      <RSideContent/>
    </div>
  )
}

export default MainContent
