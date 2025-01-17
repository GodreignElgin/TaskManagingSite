import React from 'react'
import '../../Styles/AdminPanel/AdminPanel.css';
import UpperContent from './UpperContent';
import MainContent from './MainContent';

const AdminPanel = () => {
  return (
    <main>
      <UpperContent/>
      <MainContent/>  
    </main>
  )
}

export default AdminPanel
