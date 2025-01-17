import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedAdmin, setSelectedWorkspace } from '../../Store/actions';
import { useNavigate } from 'react-router-dom'; // Import useHistory for navigation
import '../../Styles/AdminPanel/SideBar.css';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import ViewListIcon from '@mui/icons-material/ViewList';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { Button } from '@mui/material';
import Logout from '@mui/icons-material/Logout';
import ViewList from '@mui/icons-material/ViewList';
import { setSelectedSidebarComponent } from '../../Store/actions';

const SideBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Initialize useHistory for navigation

  const handleWorkspaceClick = () => {
    dispatch(setSelectedSidebarComponent("workspace"));
  };
  const handleListClick = () => {
    dispatch(setSelectedSidebarComponent("list"));
  };
  const handleTaskClick = () => {
    dispatch(setSelectedSidebarComponent("task"));
  };

  const handleLogoutClick = () => {
    navigate('/register'); // Navigate to the '/register' route
  };

  return (
    <div className='sideBar'>
      <div className='s-content'>
        <div className='s-content-u'>
          <div className='s-header'><h4>View Details</h4></div>
            <Button
              className='s-subhead'
              variant="outlined"
              onClick={handleWorkspaceClick}
              sx={{
                margin: '7px',
                fontSize: '12px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                border: 'none',
                color: 'white',
                backgroundColor: '#051228',
                '&:hover': {
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: 'blue',
                  color: 'white',
                  backgroundColor: '#051228',
                },
                '&:focus': {
                  margin: '7px',
                  alignItems: 'center',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: '2px solid blue',
                  color: 'white',
                  backgroundColor: 'rgb(148, 190, 253)',
                },
              }}
            >
              <WorkspacesIcon /><span className='workspaceName'>All Workspaces</span>
            </Button>
            <Button
              className='s-subhead'
              variant="outlined"
              onClick={handleListClick}
              sx={{
                margin: '7px',
                fontSize: '12px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                border: 'none',
                color: 'white',
                backgroundColor: '#051228',
                '&:hover': {
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: 'blue',
                  color: 'whitewhite',
                  backgroundColor: '#051228',
                },
                '&:focus': {
                  margin: '7px',
                  alignItems: 'center',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: '2px solid blue',
                  color: 'white',
                  backgroundColor: 'rgb(148, 190, 253)',
                },
              }}
            >
              <ViewListIcon /><span className='workspaceName'>All Lists (Statuses)</span>
            </Button>
            <Button
              className='s-subhead'
              variant="outlined"
              onClick={handleTaskClick}
              sx={{
                margin: '7px',
                fontSize: '12px',
                justifyContent: 'flex-start',
                alignItems: 'center',
                border: 'none',
                color: 'white',
                backgroundColor: '#051228',
                '&:hover': {
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: 'blue',
                  color: 'white',
                  backgroundColor: '#051228',
                },
                '&:focus': {
                  margin: '7px',
                  alignItems: 'center',
                  fontSize: '12px',
                  justifyContent: 'flex-start',
                  border: '2px solid blue',
                  color: 'white',
                  backgroundColor: 'rgb(148, 190, 253)',
                },
              }}
            >
              <TaskAltIcon /><span className='workspaceName'>All Tasks</span>
            </Button>
          
          <br />      
          <br />
        </div>
        <div className='logout-btn'>
          <Button
            variant='outlined'
            sx={{
              margin: '7px',
              alignItems: 'center',
              fontSize: '12px',
              justifyContent: 'flex-start',
              border: 'none',
              color: 'white',
              backgroundColor: '#051228',
              '&:hover': {
                fontFamily:'satoshi-bold',
                fontSize: '12px',
                justifyContent: 'flex-start',
                border: 'blue',
                color: 'white',
                backgroundColor: '#051228',
              },
              '&:focus': {
                fontFamily:'satoshi-bold',
                margin: '7px',
                alignItems: 'center',
                fontSize: '12px',
                justifyContent: 'flex-start',
                border: '2px solid blue',
                color: 'white',
                backgroundColor: 'rgb(148, 190, 253)',
              },
            }}
            onClick={handleLogoutClick}
          >
            <Logout />Logout??
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
