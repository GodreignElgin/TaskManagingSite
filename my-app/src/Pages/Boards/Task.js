import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import TaskPriorityMenu from './TaskPriorityMenu';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import formatDate  from '../../Utils/FormatDate';

import '../../Styles/Projects/Boards.css';

const Task = ({ task, fetchListsAndTasks }) => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [taskAnchorEl, setTaskAnchorEl] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(task.taskName);
  
  const handlePriorityClick = (event, taskId) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedTaskId(taskId);
  };

  const handlePriorityClose = () => {
    setMenuAnchorEl(null);
    setSelectedTaskId(null);
  };

  const handleTaskMenuOpen = (event) => {
    setTaskAnchorEl(event.currentTarget);
    setSelectedTaskId(task.taskId);
  };

  const handleTaskMenuClose = () => {
    setTaskAnchorEl(null);
  };

  const handleRenameClick = () => {
    setIsRenaming(true);
    handleTaskMenuClose();
  };

  const handleDeleteClick = () => {
    handleTaskMenuClose();
    toast.info(
      <div>
        Are you sure you want to delete this task?
        <div>
          <button onClick={handleDeleteConfirm}>Yes Delete</button>
          <button onClick={toast.dismiss()}>No, Cancel</button>
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
        await axios.put(`http://localhost:8080/api/tasks/${selectedTaskId}`, {
          taskName: newName,
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });
        fetchListsAndTasks();
      } catch (error) {
        console.error('Error renaming task:', error);
      }
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/tasks/${selectedTaskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchListsAndTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
    toast.dismiss(); // Close the toast after deletion
  };

  const priorityIcon = () => {
    switch (task.priority) {
      case 1:
        return <KeyboardDoubleArrowUpIcon style={{ color: 'red' }} />;
      case 2:
        return <KeyboardArrowUpIcon style={{ color: 'orange' }} />;
      case 3:
        return <DragHandleIcon style={{ color: 'yellow' }} />;
      case 4:
        return <KeyboardArrowDownIcon style={{ color: 'green' }} />;
      case 5:
        return <KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} />;
      default:
        return null;
    }
  };

  return (
    <div className='list-card-l-card'>
      {task? (
        <>
      <div className='list-card-l-card-name'>
        <div className='list-card-l-card-name-left'>
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
            task.taskName
          )}
        </div>
        <div className='list-card-l-card-name-right'>
          <IconButton aria-label="more" onClick={handleTaskMenuOpen}>
            <MoreVertIcon style={{ color: '#f2f4f7' }} />
          </IconButton>
          <Menu anchorEl={taskAnchorEl} open={Boolean(taskAnchorEl)} onClose={handleTaskMenuClose}>
            <MenuItem onClick={handleRenameClick}>Rename</MenuItem>
            <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
          </Menu>
        </div>
      </div>
      <div className='list-card-l-card-desc'>{task.taskDesc}</div>
      <div className='list-card-l-card-due'>
        <div className='list-card-l-card-due-date'>
        <CalendarMonthIcon />{formatDate(task.dueDate)}</div>
      </div>
      <div className='list-card-l-card-key'>
        <div className='list-card-l-card-key-left'>{task.taskKey}</div>
        <div className='list-card-l-card-key-right' onClick={(event) => handlePriorityClick(event, task.taskId)}>
          {priorityIcon()}
        </div>
        <TaskPriorityMenu
          anchorEl={menuAnchorEl}
          handleClose={handlePriorityClose}
          taskId={selectedTaskId}
          fetchListsAndTasks={fetchListsAndTasks}
        />
      </div>
      <ToastContainer/></>
        ):(
          <div className='list-card-l-card-l'>No tasks available.</div>
        )}
    </div>
  );
};

export default Task;
