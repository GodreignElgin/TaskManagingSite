import React, { useState } from 'react';
import { InputBase, Button, Menu } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import '../../Styles/Projects/Boards.css';
import TaskPriorityMenu from '../Boards/TaskPriorityMenu';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const priorityOptions = {
  1: { label: 'Highest Priority', icon: <KeyboardDoubleArrowUpIcon style={{ color: 'red' }} /> },
  2: { label: 'High Priority', icon: <KeyboardArrowUpIcon style={{ color: 'orange' }} /> },
  3: { label: 'Medium Priority', icon: <DragHandleIcon style={{ color: 'yellow' }} /> },
  4: { label: 'Low Priority', icon: <KeyboardArrowDownIcon style={{ color: 'green' }} /> },
  5: { label: 'Lowest Priority', icon: <KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} /> },
};

const CreateTask = ({ listItem, fetchListsAndTasks }) => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";
  const [showInputs, setShowInputs] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [dueDate, setDueDate] = useState(null);
  const [priorityAnchorEl, setPriorityAnchorEl] = useState(null);
  const [priority, setPriority] = useState(3);

  const handleCreateTask = async () => {
    if (taskName === '' || taskDesc === '') {
      setShowInputs(false);
      setTaskName('');
      setTaskDesc('');
      return;
    }

    const taskData = {
      taskName,
      taskDesc,
      priority,
      taskStatus: listItem.listName,
      createdDate: new Date(),
      dueDate,
      listId: listItem.listId,
    };

    try {
      console.log("in try block");
      const response = await axios.post('http://localhost:8080/api/tasks', taskData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        fetchListsAndTasks();
        setShowInputs(false);
        setTaskName('');
        setTaskDesc('');
        setDueDate(null);
        setPriority(3); // Reset to default priority
      }
    } catch (error) {
      console.error('Error creating task: ', error);
    }
  };

  const handlePriorityMenuOpen = (event) => {
    setPriorityAnchorEl(event.currentTarget);
  };

  const handlePriorityMenuClose = () => {
    setPriorityAnchorEl(null);
  };

  const handlePrioritySelect = (newPriority) => {
    setPriority(newPriority);
  };

  return (
    <div>
      <div 
        className='list-card-l-card-l'
        onClick={() => setShowInputs(!showInputs)}
        style={{ cursor: 'pointer'}}
      >
        <AddIcon />Create Task
      </div>

      {showInputs && (
        <div style={{ marginTop: '10px' }}>
          <InputBase
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
            style={{
                maxWidth: 'inherit',
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              color: 'white',
              backgroundColor: '#07224e'
            }}
          />
          <InputBase
            placeholder="Task Description"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            fullWidth
            multiline
            minRows={3}
            style={{
              marginBottom: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              height: '100px',
              color: 'white',
              backgroundColor: '#07224e'
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Select Due Date"
              value={dueDate}
              sx={{
                color:'white',
                backgroundColor: '#07224e'
              }}
              onChange={(newDate) => setDueDate(newDate)}
              renderInput={(params) => (
                <InputBase
                  {...params.inputProps}
                  fullWidth
                  style={{
                    marginBottom: '10px',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    color: 'white',
                    backgroundColor: '#07224e'
                  }}
                />
              )}
            />
          </LocalizationProvider>
          <div
            onClick={handlePriorityMenuOpen}
            style={{
              marginTop: '10px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',  
              color: 'white',
              backgroundColor: '#07224e'
            }}
          >
            {priorityOptions[priority].icon} {priorityOptions[priority].label}
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleCreateTask}
            style={{ marginTop: '10px' }}
          >
            Create
          </Button>

          <TaskPriorityMenu
            anchorEl={priorityAnchorEl}
            handleClose={handlePriorityMenuClose}
            handleSelect={handlePrioritySelect}
          />          
        </div>
      )}
    </div>
  );
};

export default CreateTask;
