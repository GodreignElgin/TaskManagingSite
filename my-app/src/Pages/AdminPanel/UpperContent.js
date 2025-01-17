import React, { useState } from 'react';
import '../../Styles/AdminPanel/UpperContent.css';
import EditIcon from '@mui/icons-material/Edit';
import { TextField } from '@mui/material';
import Logo from '../../Assets/Images/logo1.png';

const UpperContent = () => {
  const [companyName, setCompanyName] = useState("Manage Mate");
  const [companyDesc, setCompanyDesc] = useState("Manage Mate description");
  const [isEditing, setIsEditing] = useState(false);
  const [newCompanyName, setNewCompanyName] = useState(companyName);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleNameChange = (event) => {
    setNewCompanyName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    if (event.key === 'Enter') {
      setCompanyName(newCompanyName);
      setIsEditing(false);
    }
  };

  return (
    <div className='upper'>
      <div className='u-content'>
        <div className='u-logo'>
          <img src={Logo} alt="Example" className='u-logo-image' />
        </div>
        <div className='u-inner-content'>
          <div className='u-company-name'>
            {isEditing ? (
              <TextField
                value={newCompanyName}
                onChange={handleNameChange}
                onKeyDown={handleNameSubmit}
                variant="outlined"
                size="small"
                placeholder={companyName}  
                autoFocus
                className="MuiInputBase-root"
                style={{
                  height: '2rem',       // Set the height of the input field
                  width: 'auto',            // Set the width of the input field
                  marginBottom: '2rem'     // Add margin-bottom to the input field
                }}
              />
            ) : (
              <p><b>{companyName}</b></p>
            )}
          </div>
          <div className='u-company-desc'><p>{companyDesc}</p></div>
          <div className='u-company-editname'>
            <button
              onClick={handleEditClick}
            >
              <EditIcon fontSize='small' /> Edit Display Name?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperContent;
