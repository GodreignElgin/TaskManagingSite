import React, { useEffect, useState } from 'react'
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
import axios from 'axios';
import { useSelector } from 'react-redux';

const BoardListCard = () => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb2RyZWlnbmVsZ2luQGdtYWlsLmNvbSIsImlhdCI6MTcyMzM1Mjg2NywiZXhwIjoxNzIzNDM5MjY3fQ.efb97yeYVp3tmPawb2kOIGM1LiOSGaa3aoDNSrDUCYs";

  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);

  const [anchorEl, setAnchorEl] = useState(null);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState('Sample Name');
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [taskList, setTaskList] = useState([]);






  


  return (
    <div>
      
    </div>
  )
}

export default BoardListCard
