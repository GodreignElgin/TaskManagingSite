import React from 'react';
import { InputBase } from '@mui/material';
import '../../Styles/Projects/Boards.css';

const RenameInput = ({ newName, handleRenameChange, handleRenameSubmit }) => {
  return (
    <InputBase
      value={newName}
      onChange={handleRenameChange}
      onKeyDown={handleRenameSubmit}
      placeholder="Enter new name"
      className="rename-input"
    />
  );
};

export default RenameInput;
