import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Task from './Task';
import CreateTask from '../Common/CreateTask';
import '../../Styles/Projects/Boards.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Board = ({ listItem, tasks, fetchListsAndTasks }) => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";

  const [anchorEl, setAnchorEl] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(listItem.listName);
  const selectedWorkspace  = useSelector((state) => state.selectedWorkspace); 

  if (!tasks) {
    tasks = [];
  }

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    handleMenuClose();
    toast.info(
      <div>
        Are you sure you want to delete this list?
        <div>
          <button onClick={handleDeleteConfirm}>Yes Delete</button>
          <button onClick={() => toast.dismiss()}>Nope, Suimasen !!!</button>
        </div>
      </div>,
      { autoClose: false }
    );
  };

  const handleRenameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleRenameSubmit = async (event) => {
    if (event.key === 'Enter') {
      setIsRenaming(false);
      try {
        await axios.put(`http://localhost:8080/api/lists/${listItem.listId}`, {
          listName: newName,
          workspaceId: selectedWorkspace.workspaceId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        fetchListsAndTasks(); // Refresh list after renaming
      } catch (error) {
        console.error('Error renaming list: ', error);
      }
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/lists/${listItem.listId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      fetchListsAndTasks(); // Refresh list after deletion
    } catch (error) {
      console.error('Error deleting list: ', error);
    }
    toast.dismiss(); // Close the toast
  };

  return (
    <div className='boards-list-card'>
      <div className='list-card-u'>
        <div className='list-card-u-left'>
          <div className='list-card-u-left-name'>
            {isRenaming ? (
              <InputBase
                value={newName}
                onChange={handleRenameChange}
                onKeyDown={handleRenameSubmit}
                placeholder="Enter new name"
                className="rename-input"
                style={{
                  color: 'red',
                }}
              />
            ) : (
              listItem.listName
            )}
          </div>
          <div className='list-card-u-left-number'>{tasks.length}</div>
        </div>
        <div className='list-card-u-right'>
          <IconButton aria-label="more" onClick={handleMenuOpen}>
            <MoreVertIcon style={{ color: '#f2f4f7' }} />
          </IconButton>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleRenameClick}>Rename</MenuItem>
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='list-card-l'>
        {tasks.length === 0 ? (
          <div className='list-card-l-card-l'>No tasks available.</div>
        ) : (
          tasks.map((item) => (
            <Task key={item.taskId} task={item} fetchListsAndTasks={fetchListsAndTasks} />
          ))
        )}
        <CreateTask listItem={listItem} fetchListsAndTasks={fetchListsAndTasks} />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Board;
