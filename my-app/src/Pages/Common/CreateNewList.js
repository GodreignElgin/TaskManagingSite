import React, { useState } from 'react';
import { InputBase, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import { useSelector } from 'react-redux';
import '../../Styles/Projects/Boards.css';

const CreateNewList = ({ fetchListsAndTasks }) => {

  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";

  const [showInput, setShowInput] = useState(false);
  const [listName, setListName] = useState('');

  // Get the selected workspace from Redux
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);

  const handleCreateList = async () => {
    if (!listName.trim()) return; // Prevent empty list names

    const listData = {
      listName,
      workspaceId: selectedWorkspace.workspaceId,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/lists', listData, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200 || response.status === 201) {
        fetchListsAndTasks(); // Trigger the fetch function in the outer component
        setShowInput(false); // Hide the input field after creation
        setListName(''); // Clear the input field
      }
    } catch (error) {
      console.error('Error creating list: ', error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleCreateList();
    }
  };

  return (
    <div className='boards-list-card-add'>
      <div 
        className='list-card-u-add'
        onClick={() => setShowInput(true)}
        style={{ cursor: 'pointer' }}
      >
        <AddIcon />Create New List
      </div>

      {showInput && (
        <InputBase
          placeholder="List name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onKeyPress={handleKeyPress}
          autoFocus
          fullWidth
          style={{
            border: '1px solid #ccc',
            borderRadius: '4px',
            color: 'red',
            width: '15rem',
            height: '10rem',
            backgroundColor: 'white'
          }}
        />
      )}
    </div>
  );
};

export default CreateNewList;
