import React from 'react';
import { Menu, MenuItem } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import '../../Styles/Projects/Boards.css';

const priorityOptions = [
  { id: 1, label: 'Highest Priority', icon: <KeyboardDoubleArrowUpIcon style={{ color: 'red' }} /> },
  { id: 2, label: 'High Priority', icon: <KeyboardArrowUpIcon style={{ color: 'orange' }} /> },
  { id: 3, label: 'Medium Priority', icon: <DragHandleIcon style={{ color: 'yellow' }} /> },
  { id: 4, label: 'Low Priority', icon: <KeyboardArrowDownIcon style={{ color: 'green' }} /> },
  { id: 5, label: 'Lowest Priority', icon: <KeyboardDoubleArrowDownIcon style={{ color: 'blue' }} /> },
];

const TaskPriorityMenu = ({ anchorEl, handleClose, handleSelect }) => {
  const handleMenuItemClick = (priority) => {
    handleSelect(priority);
    handleClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      {priorityOptions.map(option => (
        <MenuItem key={option.id} onClick={() => handleMenuItemClick(option.id)}>
          {option.icon} {option.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TaskPriorityMenu;
