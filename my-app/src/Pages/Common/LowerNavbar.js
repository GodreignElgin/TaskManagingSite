import React, { useContext, useEffect } from 'react'
import '../../Styles/ProjectSettings/ProjectSettings.css';
import projImg from '../../Assets/Images/logo.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import SummarizeIcon from '@mui/icons-material/Summarize';
import DashboardIcon from '@mui/icons-material/Dashboard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useState } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const LowerNavbar = () => {

    const selectedWorkspace = useSelector((state) => state.selectedWorkspace);

    return (
        <div className='project-setting-rside-u'>
            <div className='setting-rside-u-u'>
                <div className='setting-rside-u-u-left'>
                    <div className='setting-rside-u-u-proj-img'><img src={projImg} alt='proj img' className='rside-u-u-proj-img'></img></div>
                    <div className='setting-rside-u-u-name'><h1>{selectedWorkspace?.workspaceName || "sample workspace"}</h1></div>
                </div>
                <div className='setting-rside-u-u-right'>
                    <Link to="/settings">
                        <div
                            className='setting-rside-u-u-proj-settings'>
                            <Button variant="contained" 
                                sx={{
                                width: '13rem',
                                height: '3.5rem',
                                backgroundColor: '#051228',
                                color: 'white', 
                                transition: 'background 1s ease',
                                boxShadow: '3px 3px 10px 1px #231d6c',
                                '&:hover': {
                                    boxShadow: '3px 3px 10px 1px #275d89',
                                  backgroundColor: '#051228',
                                },
                                '&:focus':{
                                    borderBottom: '2px solid white',
                                }
                            }}><SettingsIcon/>Project Settings</Button>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='setting-rside-u-l'>
                <div 
                    className='setting-rside-u-l-btns'>
                  <Link to="/summary">
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: '#051228',
                        color: '#f2f4f7',
                        transition: 'background 1s ease',
                        boxShadow: '3px 3px 10px 1px #231d6c',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            boxShadow: '3px 3px 10px 1px #275d89',
                            backgroundColor: '#051228',
                        },
                        '&:focus':{
                            borderBottom: '2px solid white',
                        }
                    }}><SummarizeIcon/>Summary</Button>
                  </Link>
                  <Link to="/boards">
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: '#051228',
                        color: '#f2f4f7',
                        transition: 'background 1s ease',
                        boxShadow: '3px 3px 10px 1px #231d6c',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            boxShadow: '3px 3px 10px 1px #275d89',
                            backgroundColor: '#051228',
                        },
                        '&:focus':{
                            borderBottom: '2px solid white',
                        }
                    }}><DashboardIcon/>Board</Button>
                  </Link>
                  <Link to="/list">
                    <Button variant='contained'
                    sx={{
                        width: '9rem',
                        height: '100%',
                        backgroundColor: '#051228',
                        color: '#f2f4f7',
                        transition: 'background 1s ease',
                        boxShadow: '3px 3px 10px 1px #231d6c',
                        borderRadius: '5px',
                        '&:hover': {
                            borderRadius: '5px',
                            boxShadow: '3px 3px 10px 1px #275d89',
                            backgroundColor: '#051228',
                        },
                        '&:focus':{
                            borderBottom: '2px solid white',
                        }
                    }}><FormatListBulletedIcon/>List</Button>
                  </Link>
                </div>
            </div>
        </div>
    ) 
}   

export default LowerNavbar
