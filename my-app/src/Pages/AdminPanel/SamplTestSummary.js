import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Summary from '../Projects/Summary';
import Sidebar from '../Common/Sidebar';
import LowerNavbar from '../Common/LowerNavbar';
import Navbar from '../HomePage/Navbar';

const SamplTestSummary = () => {

    const selectedWorkspace = useSelector((state) => state.selectedWorkspace);

    const [ projName, setProjName ] = useState('Sample Project 1'); 
    const [ projKey, setProjKey ] = useState('GSAD');
    const [ projDesc, setProjDesc ] = useState('Sample Project 1 sdfhj  sh fg kjhsgjhgjf shkhjgjh kj');
    const [ projLead, setProjLead ] = useState('Sample Lead 1');

  return (
    <div className='project-setting-main'> 
    <div className='dummy-navbar'> <Navbar/></div> 
    <div className='projectt-settings'>
        <div className='project-setting-sidebar'>
            <Sidebar/>
        </div>
        <div className='project-setting-rside'>
            <LowerNavbar/>  
            <div className='project-setting-rside-l'>
                <Summary/>
            </div>
        </div>
    </div>  
</div>
  )
}

export default SamplTestSummary
