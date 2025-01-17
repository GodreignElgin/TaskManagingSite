import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../Styles/Login/login.css';
import Logo from '../../Assets/Images/logo1.png';
import axios from 'axios';

function Login1() {

  const navigate = useNavigate();
   
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (email === '' || password === '') {
      alert('Please fill out both fields.');
    } else {
      try {
        const token = sessionStorage.getItem("signup-token"); 
        const response = await axios.post(
          "http://localhost:8080/api/v1/auth/authenticate",
          {
            email,
            password,
          },{
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("tokenExpiration", Date.now() + 36000);
          console.log(response.data.token);
          if(isAdmin){
            navigate("/admin");
          }
          else{
            navigate("/");

          }
  
      } catch (error) {
        console.error("Error in login, olunga spelling pathu podu da sunnii :", error);
      }
    }
  };

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className='container'>
      <div className="card">
        {/* <div className='logoo'>
        <img
          src={Logo}
          alt="College Logo"
          className="logo"
        /></div> */}
        <h1 className="title">MANAGE-MATE</h1>
        {isAdmin === false && (
        <h2 className="subtitle"
        >User Login</h2>
      )}
        {isAdmin === true && (
      <h2 className="subtitle"
      style={{
        color: 'red',
      }}>Admin Login</h2>

        )}
        <form className="form" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="input"
              autoComplete="off"
              value={email}
              style={{
                width: '100%',
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="password" className="label">Password</label>
            <div className="passwordWrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="input"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: '100%',
                  border: "none",
                  borderBottom: "2px solid transparent",
                  borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
                }}
              />
              <span className="passwordIcon" onClick={handleShowPassword}>
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>
            <div className="forgotPassword">
              {/* <Link to="/forgot-password">Forgot Password?</Link> */}
            </div>
          </div>
          <center>
            <button type="submit" className="button">Login</button>
          </center>
        </form>
        <div className="registerLink">
          <span>Don't have an account? </span>
          <b className='login-redirect' onClick={handleRegisterClick}>Register here</b>
        </div>
        {isAdmin === false && (
        <div className='login-redirect-toggle'
        onClick={handleToggle}>Login as Admin</div>
        )}
        {isAdmin === true && (
        <div className='login-redirect-toggle'
        onClick={handleToggle}>Login as User</div>
        )}
      </div>
    </div>
  );
}

export default Login1;
