import React, { useEffect, useState } from 'react';
import '../../Styles/Projects/Boards.css';
import { Button, IconButton, Menu, MenuItem, InputBase } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import BoardListCard from '../Common/BoardListCard';
import { useSelector } from 'react-redux';
import Add from '@mui/icons-material/Add';
import CreateTask from '../Common/CreateTask';
import CreateNewList from '../Common/CreateNewList';

const Boards = () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwdWdhbEBnbWFpbC5jb20iLCJpYXQiOjE3MjM0MzU3OTUsImV4cCI6MTcyMzUyMjE5NX0.xv9hICIxOmFdvf59NLBeCmLDPIq7ZcDD1DKPlVJPoAs";
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
  const [lists, setLists] = useState([]);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState('Sample Name');
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

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
  };

  const handleRenameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleRenameSubmit = (event) => {
    if (event.key === 'Enter') {
      setIsRenaming(false);
    }
  };

  const handlePriorityClick = (event, taskId) => {
    setMenuAnchorEl(event.currentTarget);
    setSelectedTaskId(taskId);
  };

  const handlePriorityClose = () => {
    setMenuAnchorEl(null);
    setSelectedTaskId(null);
  };

  const handlePriorityChange = async (newPriority) => {
    if (selectedTaskId !== null) {
      try {
        await axios.put(`http://localhost:8080/api/tasks/${selectedTaskId}`, {
          priority: newPriority
        }, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          }
        });
        // Update the taskList locally
        setTasks((prevTasks) => ({
          ...prevTasks,
          [Object.keys(prevTasks).find(key => prevTasks[key].some(task => task.taskId === selectedTaskId))]: 
            prevTasks[Object.keys(prevTasks).find(key => prevTasks[key].some(task => task.taskId === selectedTaskId))].map((task) =>
              task.taskId === selectedTaskId ? { ...task, priority: newPriority } : task
            )
        }));
      } catch (error) {
        console.error("Error updating priority: ", error);
      } finally {
        handlePriorityClose();
      }
    }
  };

  const fetchListsAndTasks = async () => {
    try {
      const listsResponse = await axios.get(`http://localhost:8080/api/lists/workspace/${selectedWorkspace.workspaceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setLists(listsResponse.data);

      // Fetch tasks for each list
      const tasksPromises = listsResponse.data.map((list) =>
        axios.get(`http://localhost:8080/api/tasks/list/${list.listId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
      );

      const tasksResponses = await Promise.all(tasksPromises);
      const tasksData = tasksResponses.reduce((acc, response, index) => {
        acc[listsResponse.data[index].listId] = response.data; // Use list.id instead of list.listId
        return acc;
      }, {});

      setTasks(tasksData);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    if (selectedWorkspace && selectedWorkspace.workspaceId) {
      fetchListsAndTasks();
    }
  }, [selectedWorkspace]);

  return (
    <div className='boards-main'>
      {error ? (
        <div className='error-message'>{error}</div>
      ) : lists.length === 0 ? (
        <div className='empty-message'>No lists available.</div>
      ) : (
        lists.map((listItem) => {
          const taskList = tasks[listItem.listId] || []; // Ensure tasks exist for listItem.id

          return (
            <div 
              className='boards-list-card'
              key={listItem.listId}
            >
              <div className='list-card-u'>
                <div className='list-card-u-left'>
                  <div className='list-card-u-left-name'>
                    {isRenaming ? (
                      <InputBase
                        value={newName}
                        onChange={handleRenameChange}
                        onKeyDown={handleRenameSubmit}
                        placeholder="null"
                        className="rename-input"
                      />
                    ) : (
                      listItem.listName
                    )}
                  </div>
                  <div className='list-card-u-left-number'>{taskList.length}</div>
                </div>
                <div className='list-card-u-right'>
                  <IconButton
                    aria-label="more"
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
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
              <div className='list-card-l'>
                {taskList.length === 0 ? (
                  <div className='list-card-l-card-l'>No tasks available.</div>
                ) : (
                  taskList.map((item) => {
                    let priorityIcon;
                    switch (item.priority) {
                      case 1:
                        priorityIcon = <KeyboardDoubleArrowUpIcon style={{ color: 'red' }} />;
                        break;
                      case 2:
                        priorityIcon = <KeyboardArrowUpIcon style={{ color: 'orange' }} />;
                        break;
                      case 3:
                        priorityIcon = <DragHandleIcon style={{ color: 'yellow' }} />;
                        break;
                      case 4:
                        priorityIcon = <KeyboardArrowDownIcon style={{ color: 'green' }} />;
                        break;
                      case 5:
                        priorityIcon = <KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} />;
                        break;
                      default:
                        priorityIcon = null;
                    }

                    return (
                      <div
                        key={item.taskId}
                        className='list-card-l-card'
                      >
                        <div className='list-card-l-card-name'>
                          <div className='list-card-l-card-name-left'>
                            {item.taskName}
                          </div>
                          <div className='list-card-l-card-name-right'>
                            <MoreVertIcon/>
                          </div>
                          </div>
                        <div className='list-card-l-card-desc'>{item.taskDesc}</div>
                        <div className='list-card-l-card-due'>
                          <CalendarMonthIcon />{item.createdDate}
                        </div>
                        <div className='list-card-l-card-key'>
                          <div className='list-card-l-card-key-left'>{item.taskKey}</div>
                          <div
                            className='list-card-l-card-key-right'
                            onClick={(event) => handlePriorityClick(event, item.taskId)}
                          >
                            {priorityIcon}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
                <Menu
                  anchorEl={menuAnchorEl}
                  open={Boolean(menuAnchorEl)}
                  onClose={handlePriorityClose}
                >
                  <MenuItem onClick={() => handlePriorityChange(1)}>
                    <KeyboardDoubleArrowUpIcon style={{ color: 'red' }} /> Highest
                  </MenuItem>
                  <MenuItem onClick={() => handlePriorityChange(2)}>
                    <KeyboardArrowUpIcon style={{ color: 'orange' }} /> High
                  </MenuItem>
                  <MenuItem onClick={() => handlePriorityChange(3)}>
                    <DragHandleIcon style={{ color: 'yellow' }} /> Medium
                  </MenuItem>
                  <MenuItem onClick={() => handlePriorityChange(4)}>
                    <KeyboardArrowDownIcon style={{ color: 'green' }} /> Low
                  </MenuItem>
                  <MenuItem onClick={() => handlePriorityChange(5)}>
                    <KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} /> Lowest
                  </MenuItem>
                </Menu>
                <CreateTask listItem={listItem} fetchListsAndTasks={fetchListsAndTasks}/>
              </div>
            </div>
          );
        })
      )}
      <CreateNewList fetchListsAndTasks={fetchListsAndTasks} />
    </div>
  );
};

export default Boards;
