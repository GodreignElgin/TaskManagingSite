import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import '../../Styles/ProjectSettings/ProjectSettings.css';
import Sidebar from '../Common/Sidebar';
import LowerNavbar from '../Common/LowerNavbar';
import Settings from '../Projects/Settings';
import Summary from '../Projects/Summary';
// import Boards from '../Projects/Boards';
import Boards from '../Boards/Boards';
import ListPage from '../Projects/ListPage';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Projects from '../Projects/Projects';
import Navbar from '../HomePage/Navbar';
 
const ProjectSettings = () => {

  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
  const selectedSubPage = useSelector((state) => state.selectedSubPage);

    const [ projName, setProjName ] = useState('Sample Project 1'); 
    const [ projKey, setProjKey ] = useState('GSAD');
    const [ projDesc, setProjDesc ] = useState('Sample Project 1 sdfhj  sh fg kjhsgjhgjf shkhjgjh kj');
    const [ projLead, setProjLead ] = useState('Sample Lead 1');

  return (  
    <div className='project-setting-main'> 
        <div className='dummy-navbar'><Navbar/> </div> 
        <div className='projectt-settings'>
            <div className='project-setting-sidebar'>
                <Sidebar/>
            </div>
            <div className='project-setting-rside'>
                <LowerNavbar/>  
                <div className='project-setting-rside-l'>
                    
                </div>
            </div>
        </div>  
    </div>
  )
}

export default ProjectSettings;