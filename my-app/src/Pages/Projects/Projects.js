import React from 'react'
import '../../Styles/Projects/Projects.css';
import { useState } from 'react';
import { Button, Pagination, TextField } from '@mui/material';
import profilePic from '../../Assets/Images/logo.jpg';
import projectsList from '../../SampleJson/Projects.json';

const Projects = () => {

    const [ page, setPage ] = useState(1);

    const itemsPerPage = 7;

    const paginatedProjects = projectsList.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handlePageChange = (event, value) => {
      setPage(value);
    };

  return (
    <div className='project-main'>
      <div className='dummy-navbar'></div>
      <div className='projectt'>
      
        <div className='project-header'>
          <div className='project-header-l'>
              <div className='project-header-head'>
                  <h1>Projects</h1>
              </div>
          </div>
          <div className='projet-header-r'>
              <div className='project-header-search'>
                  <TextField id="filled-basic" label="Filled" variant="filled" 
                  sx={{
                    width: '18rem',
                    height: '3.5rem',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white', // Text color to ensure readability
                    transition: 'background 1s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                    },
                  }}/>
              </div>
              <div className='project-header-createbutton'>
                  <Button variant="contained" 
                  sx={{
                    width: '13rem',
                    height: '3.5rem',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white', // Text color to ensure readability
                    transition: 'background 1s ease',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                    },
                  }}>Create Project</Button>
              </div>
          </div>
        </div>
        <div className='project-sub-header'>
          <div className='project-sub-name' style={{width: '20%'}}><h4>Name</h4></div>
          <div className='project-sub-key' style={{width: '10%'}}><h4>Key</h4></div>
          <div className='project-sub-type' style={{width: '20%'}}><h4>Type</h4></div>
          <div className='project-sub-lead' style={{width: '25%'}}><h4>Lead</h4></div>
          <div className='project-sub-editproj' style={{width: '14%'}}>
            More Actions..
          </div>
        </div>
        <div className='project-content'>
          {paginatedProjects.map((project, index) => (
          <div key={index} className='project-content-card'>
              <div className='project-card-name' style={{width: '20%'}}>
                  <img src={profilePic} alt='projet_img' className='project-image'></img>
                  <h4 className='project-name-card'>{project.name}</h4>
              </div>
              <div className='project-card-key' style={{width: '10%'}}>{project.key}</div>
              <div className='project-card-type' style={{width: '20%'}}>{project.type}</div>
              <div className='project-card-lead' style={{width: '25%'}}>
                  <img src={profilePic} alt='projet_lead-profile' className='project-lead-image'></img>
                  <h4 className='project-lead-name'>{project.lead}</h4>
              </div>
              <div className='project-card-more' style={{width: '14%'}}><Button variant='contained'
              sx={{
                width: '13rem',
                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                color: 'white', // Text color to ensure readability
                transition: 'background 1s ease',
                '&:hover': {
                  background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                },
              }}>Edit Project Details</Button></div>
          </div>
          ))}
          <Pagination
            count={Math.ceil(projectsList.length/itemsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
            className="pagination"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
