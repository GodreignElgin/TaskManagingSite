import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InfoToast = () => {

  // Function to display the initial toast with buttons
  const showInfoToast = () => {
    toast(
      <div>
        <div>Are you sure you want to delete this workspace?</div>
        <button onClick={() => showDetails("Button 1 Info")} style={{ margin: '5px' }}>Delete</button>
        <button onClick={() => showDetails("Button 2 Info")} style={{ margin: '5px' }}>Nop Suimasen !!</button>
      </div>,
      { autoClose: false }
    );
  };

  // Function to display detailed info when a button is clicked
  const showDetails = (info) => {
    toast.info(info, { autoClose: 3000 });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={showInfoToast}>Show Info Toast</button>
      <ToastContainer />
    </div>
  );
};

export default InfoToast;
