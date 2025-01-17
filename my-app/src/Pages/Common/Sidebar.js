import React, { useEffect, useState } from 'react';
import '../../Styles/Common/Sidebar.css';
import profilepic from '../../Assets/Images/logo.jpg';
import AddchartIcon from '@mui/icons-material/Addchart';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedWorkspace } from '../../Store/actions';
import { IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y';
  const dispatch = useDispatch();
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);

  const [projectList, setProjectList] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [newProjectName, setNewProjectName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMenuOpen = (event, project) => {
    setAnchorEl(event.currentTarget);
    setSelectedProject(project);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
    handleMenuClose();
  };

  const handleRenameChange = (event) => {
    setSelectedProject({
      ...selectedProject,
      workspaceName: event.target.value,
    });
  };

  const handleRenameSubmit = async (event) => {
    if (event.key === 'Enter' && selectedProject) {
      try {
        await axios.put(
          `http://localhost:8080/api/workspaces/${selectedProject.workspaceId}`,
          { workspaceName: selectedProject.workspaceName },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );
        fetchProjectList();
      } catch (error) {
        console.error('Error renaming project:', error);
      }
      setIsRenaming(false);
    }
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    if (selectedProject) {
      toast.info(
        <div>
          Are you sure you want to delete this workspace?
          <div>
            <button onClick={handleDeleteConfirm}>Yes Delete</button>
            <button onClick={toast.dismiss}>Nope</button>
          </div>
        </div>,
        { autoClose: false }
      );
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(
        `http://localhost:8080/api/workspaces/${selectedProject.workspaceId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      fetchProjectList();
      toast.dismiss();
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const fetchProjectList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/workspaces', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setProjectList(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const listData = {
    listName : "To Do",
    workspaceId: null,
  };

  const handleAddProject = async () => {
    if (!newProjectName.trim()) {
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:8080/api/workspaces',
        { workspaceName: newProjectName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      
      if (response.status === 200 || response.status === 201) {
        setNewProjectName('');
        setShowInput(false);
        fetchProjectList();
      }
      const res = await axios.post('http://localhost:8080/api/lists',{
        listName: "To Do",
        workspaceId: response.data.workspaceId
      },{
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(listData);
      console.error('Error adding new project:', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddProject();
    }
  };

  const handleProjectClick = (project, event) => {
    setSelectedProject(project);
    event.currentTarget.classList.add('selected');
    dispatch(setSelectedWorkspace({ workspaceId: project.workspaceId, workspaceName: project.workspaceName }));
  };

  useEffect(() => {
    fetchProjectList();
  }, []);

  return (
    <div className='sidebar-main'>
      <div className='sidebar-content'>
        <div className='sidebar-u'>
          <div className='sidebar-u-label'><b>Projects</b></div>
          <div className='sidebar-u-plus-icon' onClick={() => setShowInput(!showInput)}>
            <AddchartIcon sx={{ fontSize: 30 }} />
          </div>
        </div>
        {showInput && (
          <div className="sidebar-proj-list-card"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            height: '10%',
          }}>
            <input
              type="text"
              className="sidebar-proj-list-card-label"
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter new project name"
              autoFocus
              style={{
                color: 'white',
                backgroundColor: "black",
                border: 'none',
                height: '60%',
                width: '90%',
                fontSize: '15px',
              }}
            />
          </div>
        )}
        <div className='sidebar-proj-list'>
          {projectList.map((project) => (
            <div
              key={project.workspaceId}
              className={`sidebar-proj-list-card ${selectedProject?.workspaceId === project.workspaceId ? 'selected' : ''}`}
              onClick={(event) => handleProjectClick(project, event)}
            >
              <div className='sidebar-proj-list-card-l'>
                <div className='sidebar-proj-list-card-icon'>
                  <img src={profilepic} alt='profile-pic' className='sidebar-proj-list-card-img' />
                </div>
                <div className='sidebar-proj-list-card-label'>
                  {isRenaming && selectedProject?.workspaceId === project.workspaceId ? (
                    <InputBase
                      value={selectedProject.workspaceName}
                      onChange={handleRenameChange}
                      onKeyDown={handleRenameSubmit}
                      autoFocus
                      style={{
                        color: 'red',
                      }}
                    />
                  ) : (
                    project.workspaceName
                  )}
                </div>
              </div>
              <div className='sidebar-proj-list-card-r'>
                <IconButton
                  aria-label="more"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={(event) => handleMenuOpen(event, project)}
                >
                  <MoreVertIcon style={{ color: '#f2f4f7' }} />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl) && selectedProject?.workspaceId === project.workspaceId}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={handleRenameClick}>
                    <EditIcon className="menu-icon" /> Rename
                  </MenuItem>
                  <MenuItem onClick={handleDeleteClick}>
                    <DeleteIcon className="menu-icon" /> Delete
                  </MenuItem>
                </Menu>
              </div>
            </div>
          ))}
        </div>
        <div className='sidebar-view'>
          <Link to="/login">
            <div className='sidebar-view-label'>Logout <LogoutIcon/></div>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Sidebar;
