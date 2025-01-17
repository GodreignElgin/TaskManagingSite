import React, { useEffect, useRef, useState } from 'react'
import '../../Styles/Projects/ListPage.css';
import { Checkbox, FormControlLabel, Menu, MenuItem } from '@mui/material';
import items from '../../SampleJson/HighestPriority.json';
import TagIcon from '@mui/icons-material/Tag';
import DehazeIcon from '@mui/icons-material/Dehaze';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import formatDate from '../../Utils/FormatDate';

const  ListPage = () => { 

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";
    const headerDivRef = useRef(null);
    const contentDivRef = useRef(null);

    const [checkedItems, setCheckedItems] = useState(Array(items.length).fill(false));
    const [isAllChecked, setIsAllChecked] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
  
    const syncScroll = (sourceDiv, targetDiv) => {
      if (targetDiv.current && sourceDiv.current) {
          targetDiv.current.scrollLeft = sourceDiv.current.scrollLeft;
          targetDiv.current.scrollTop = sourceDiv.current.scrollTop;
      }
    };

    const handleSelectAllChange = (event) => {
      const isChecked = event.target.checked;
      setIsAllChecked(isChecked);
      setCheckedItems(Array(items.length).fill(isChecked));
    };
  
    const handleCheckboxChange = (index) => (event) => {
      const newCheckedItems = [...checkedItems];
      newCheckedItems[index] = event.target.checked;
      setCheckedItems(newCheckedItems);
      setIsAllChecked(newCheckedItems.every((item) => item));
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
          setTaskList((prevTaskList) => 
            prevTaskList.map((task) =>
              task.taskId === selectedTaskId ? { ...task, priority: newPriority } : task
            )
          );
        } catch (error) {
          console.error("Error updating priority: ", error);
        } finally {
          handlePriorityClose();
        }
      }
    };

    useEffect(() => {
      const headerDiv = headerDivRef.current;
      const contentDiv = contentDivRef.current;

      const handleHeaderScroll = () => syncScroll(headerDivRef, contentDivRef);
      const handleContentScroll = () => syncScroll(contentDivRef, headerDivRef);

      headerDiv.addEventListener('scroll', handleHeaderScroll);
      contentDiv.addEventListener('scroll', handleContentScroll);

      return () => {
          headerDiv.removeEventListener('scroll', handleHeaderScroll);
          contentDiv.removeEventListener('scroll', handleContentScroll);
      };
    }, []);
  
    const fetchTaskList = async () => {
      try{
        const response = await axios.get('http://localhost:8080/api/tasks', {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setTaskList([]);
        setTaskList(response.data);
        setCheckedItems(Array(response.data.length).fill(false));
      }catch(error){
        console.log("Error fetching data: ",error);
      }
    };
    
    useEffect(() => {
      fetchTaskList(); // Fetch tasks on component mount
    }, []);

  return (
    <div className='list-page-main'>
      <div className='list-page-list'>
        <div ref={headerDivRef} className='list-header'>
            <div className='list-content-checkbox' 
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isAllChecked}
                      onChange={handleSelectAllChange}
                      color="primary"
                    />
                  }
                />
            </div>
            <div className='list-content-key'>
              <TagIcon/>Key
            </div>
            <div className='list-content-summary'>
              <DehazeIcon/>Summary
            </div>
            <div className='list-content-status'>
              <ArrowCircleRightIcon/>Status
            </div>
            <div className='list-content-priority'>
              <ArrowCircleUpOutlinedIcon/>Priority
            </div>
            <div className='list-content-duedate'>
              <DateRangeIcon/>Due Date
            </div>
            <div className='list-content-created'>
              <DateRangeIcon/>Created
            </div>
        </div>
        <div ref={contentDivRef} className='list-content'>
        {taskList.map((item, index) => {
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
                className={`list-content-card item-row ${checkedItems[index] ? 'item-row-checked' : ''}`}>
                <div className='list-content-checkbox'>
                  <Checkbox
                    checked={checkedItems[index]}
                    onChange={handleCheckboxChange(index)}
                    color="primary"
                  />
                </div>
                <div className='list-content-key'>{item.taskKey}</div>
                <div className='list-content-summary'>{item.taskDesc}</div>
                <div className='list-content-status'>{item.taskStatus}</div>
                <div 
                  className='list-content-priority'
                  onClick={(event) => handlePriorityClick(event, item.taskId)}
                >
                  {priorityIcon}
                </div>
                <div className='list-content-duedate'>{formatDate(item.dueDate)}</div>
                <div className='list-content-created'>{formatDate(item.createdDate)}</div>
              </div>
            );
          })}
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
        </div>
        <div className='create-task-below'><AddIcon/>Create Task</div>
      </div>
    </div>
  )
}

export default ListPage
