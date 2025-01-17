import React, { useEffect, useState } from 'react';
import '../../Styles/Projects/Boards.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Board from './Board';
import CreateNewList from '../Common/CreateNewList';

const Boards = () => {
  const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJnb3d0aGFhbUBnbWFpbC5jb20iLCJpYXQiOjE3MjM2MDA4ODUsImV4cCI6MTcyMzY4NzI4NX0.Sz1Vve5kKBchK44FB24J5hkhbhQs1-WaHa_kCOY9_4Y";
  const selectedWorkspace = useSelector((state) => state.selectedWorkspace);
  const [lists, setLists] = useState([]);
  const [tasks, setTasks] = useState({});
  const [error, setError] = useState(null);

  const fetchListsAndTasks = async () => {
    try {
      const listsResponse = await axios.get(`http://localhost:8080/api/lists/workspace/${selectedWorkspace.workspaceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setLists(listsResponse.data);

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
        acc[listsResponse.data[index].listId] = response.data;
        return acc;
      }, {});

      setTasks(tasksData);
    } catch (error) {
      setError("Error fetching data");
      console.error("Error fetching data: ", error);
      setLists([{
        "listId":1,
        "listName":"nothing"
      }]);
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
        lists.map((listItem) => (
          <Board 
            key={listItem.listId} 
            listItem={listItem} 
            tasks={tasks[listItem.listId]} 
            fetchListsAndTasks={fetchListsAndTasks} 
          />
        ))
      )}
      <CreateNewList fetchListsAndTasks={fetchListsAndTasks} />
    </div>
  );
};

export default Boards;
