import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../../Styles/AdminPanel/RSideContent.css';
import { Button, TextField, Pagination } from '@mui/material';
import profilePic from '../../Assets/Images/logo.jpg';
import enterpriseMembers from '../../SampleJson/enterpriseMembers.json';
import freeManagedAccounts from '../../SampleJson/freeManagedAccounts.json';
import boardGuests from '../../SampleJson/boardGuests.json';
import enterpriseWorkspaces from '../../SampleJson/enterpriseWorkspaces.json';
import nonEnterpriseList from '../../SampleJson/nonEnterpriseList.json';
import pending from '../../SampleJson/pending.json';
import axios from 'axios';
import formatDate from '../../Utils/FormatDate';
 
const RSideContent = () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";
  const selectedComponent = useSelector((state) => state.selectedSidebarComponent);
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
  const [workspaces, setWorkspaces] = useState([]);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [workspaceData, setWorkspaceData] = useState([]);
  const [page, setPage] = useState(1);

  const itemsPerPage = 6;

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const fetchWorkspaceList = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/workspaces', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setWorkspaces(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchLists = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/lists', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setLists(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/tasks', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchWorkspaceList();
    fetchTasks();
    fetchLists();
  }, []);

  return (
    <div className='rSideContent'>
      <div className='rSide-c'>
        <div className='rSide-content-allow'>
          <div className='rSide-content-header'>
            {selectedComponent === "workspace" && (
              <>
            <div className='rSide-header-sno'>S.No</div>
            <div className='rSide-header-workspace-key'>Key</div>
            <div className='rSide-header-workspace-name'>Name</div>
            <div className='rSide-header-workspace-desc'>Workspace Description</div>
            </>
            )}
            {selectedComponent === "list" && (
              <>
                <div className='rSide-header-sno'>S.No</div>
                <div className='rSide-header-workspace-key'>Key</div>
                <div className='rSide-header-workspace-name'>Name</div>
                <div className='rSide-header-list-workspace'>Workspace</div>
              </>
            )}
            {selectedComponent === "task" && (
              <>
              <div className='rSide-header-sno'>S.No</div>
              <div className='rSide-header-workspace-key'>Key</div>
              <div className='rSide-header-workspace-name'>Name</div>
              <div className='rSide-header-task-priority'>Priority</div>
              <div className='rSide-header-task-desc'>Task Description</div>
              <div className='rSide-header-task-created'>Created Date</div>
              <div className='rSide-header-task-due'>Due Date</div>
              <div className='rSide-header-task-list'>List</div>
            </>
            )} 
          </div>
          {selectedComponent === "workspace" && workspaces.map((workspace, index) => (
            <div
            key={workspace.workspaceId} 
              className='rSide-content-card'>
                <>
                  <div className='rSide-header-sno'>{(page - 1) * itemsPerPage + index + 1}</div>
                  <div className='rSide-header-workspace-key'>{workspace.workspaceKey}</div>
                  <div className='rSide-header-workspace-name'>{workspace.workspaceName}</div>
                  <div className='rSide-header-workspace-desc'>{workspace.workspaceDesc}</div>
                </>
            </div>
          ))}
          {selectedComponent === "list" && lists.map((list, index) => (
            <div
            key={list.listId} 
              className='rSide-content-card'>
                <>
                  <div className='rSide-header-sno'>{(page - 1) * itemsPerPage + index + 1}</div>
                  <div className='rSide-header-workspace-key'>{list.keyId}</div>
                  <div className='rSide-header-workspace-name'>{list.listName}</div>
                  <div className='rSide-header-workspace-desc'>{list.workspaceId}</div>
                </>
            </div>
          ))}
          {selectedComponent === "task" && tasks.map((task, index) => (
            <div
            key={task.taskId} 
              className='rSide-content-card'>
                <>
                  <div className='rSide-header-sno'>{(page - 1) * itemsPerPage + index + 1}</div>
                  <div className='rSide-header-workspace-key'>{task.taskKey}</div>
                  <div className='rSide-header-workspace-name'>{task.taskName}</div>
                  <div className='rSide-header-task-priority'>{task.priority}</div>
                  <div className='rSide-header-task-desc'>{task.taskDesc}</div>
                  <div className='rSide-header-task-created'>{formatDate(task.createdDate)}</div>
                  <div className='rSide-header-task-due'>{formatDate(task.dueDate)}</div>
                  <div className='rSide-header-task-list'>{task.listId}</div>
                </>
            </div>
          ))}
          </div>
        </div>
    </div>
  );
};

export default RSideContent;
