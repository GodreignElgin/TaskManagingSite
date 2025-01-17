import React, { useContext, useEffect } from 'react'
import '../../Styles/ProjectSettings/ProjectSettings.css';
import projImg from '../../Assets/Images/logo.jpg';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Settings = () => {

    const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
    
    const [ projKey, setProjKey ] = useState('GSAD');
    const [ projDesc, setProjDesc ] = useState('Sample Project 1 sdfhj  sh fg kjhsgjhgjf shkhjgjh kj');
    const [ projLead, setProjLead ] = useState('Sample Lead 1');
  
  return (
    <div className='setting-rside-l-window'>
    <div className='setting-rside-l-window-content'>
        <div className='setting-rside-l-window-u'>
            <div className='setting-rside-l-window-u-path'><p>Projects / Go To Market Place / {selectedWorkspace.workspaceName}</p></div>
            <div className='setting-rside-l-window-u-det'>Details</div>
        </div>
        <div className='setting-rside-l-window-form'>
            <div className='setting-rside-l-window-form-left'>
                <div className='setting-rside-l-window-form-img'>
                    <img src={projImg} alt='proj img' className='rside-l-window-form-img'></img>
                </div>
                <Button variant='contained'
                sx = {{
                    width: '7rem',
                    height: '2rem%',
                    fontSize: '10px',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    color: 'white', // Text color to ensure readability
                    transition: 'background 1s ease',
                    '&:hover': {
                        borderRadius: '0px',
                        background: 'transparent',
                        borderBottom: '2px solid blue',
                    },
                }}>Change Icon</Button>
            </div>
            <div className='setting-rside-l-window-form-right'>
                <div className='setting-rside-l-window-form-right-r'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Name"
                        value={selectedWorkspace.workspaceName}
                        sx={{
                            width: '90%',
                        }}
                    />
                    <TextField
                      id="outlined-multiline-static"
                      label="Description"
                      multiline
                      rows={4}
                      defaultValue={projDesc}
                      sx={{
                        width: '90%',
                    }}
                    />
                </div>
                <div className='setting-rside-l-window-form-right-l'>
                    <TextField
                        required
                        id="outlined-required"
                        label="Key"
                        defaultValue={projKey}
                        sx={{
                            width: '90%',
                        }}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        label="Project Lead"
                        defaultValue={projLead}
                        sx={{
                            width: '90%',
                        }}
                    />
                    <Button variant='contained'
                        sx = {{
                            width: '7rem',
                            height: '2rem%',
                            fontSize: '10px',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            color: 'white', // Text color to ensure readability
                            transition: 'background 1s ease',
                            '&:hover': {
                                borderRadius: '0px',
                                background: 'transparent',
                                borderBottom: '2px solid blue',
                            },
                        }}>Save</Button>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Settings
