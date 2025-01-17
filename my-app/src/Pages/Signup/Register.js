import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Signup/register.css';
import axios from 'axios';

function Register() {

  const navigate = useNavigate(); 

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConPassword, setShowConPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);   
  const [isConPasswordFocused, setIsConPasswordFocused] = useState(false);   
  const [role, setRole] = useState("USER");
  const [isAdmin, setIsAdmin] = useState(false);

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true);
  };

  const handleConPasswordFocus = () => {
    setIsConPasswordFocused(true);
  };

  const handlePasswordBlur = () => {
    setIsPasswordFocused(false);
  };

  const handleConPasswordBlur = () => {
    setIsConPasswordFocused(false);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleRegisterClick = () => {
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault();
      try{
        const name = username;
        const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
          name,
          email,
          password,
          role,
        });
        console.log("success");
        navigate('/login')
        sessionStorage.setItem("signup-token",response.data.token);
      }catch(error){

        console.log(error)
      }
  };

  const handleToggle = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        {isAdmin === false && (
          <h1 className="register-title">User Register</h1>
        )}
        {isAdmin === true && (
          <h1 className="register-title"
          style={{
            color: 'red',
          }}>Admin Register</h1>
        )}
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label htmlFor="username" className="label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete='off'
              className="input"
              value={username}
              style={{
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
              }}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete='off'
              className="input"
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
            <div className="password-input-container">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                className="input"
                value={password}
                autoComplete='off'
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                style={{
                  border: "none",
                  borderBottom: "2px solid transparent",
                  borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
                }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {isPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </div>
              )}
            </div>
          </div>
          {/* <div className="formGroup">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <div className="password-input-container">
            <input
              type={showConPassword ? 'text' : 'password'}
              id="confirmPassword"
              name="confirmPassword"
              className="input"
              autoComplete='off'
              value={confirmPassword}
              onFocus={handleConPasswordFocus}
              onBlur={handleConPasswordBlur}
              style={{
                border: "none",
                borderBottom: "2px solid transparent",
                borderImage: "linear-gradient(to right, #ff7e5f, #feb47b) 1",
                '&:focus':{
                  border: 'none',
                  borderBottom: '2px solid transparent',
                  borderImage: 'linear-gradient(to right, #6a11cb, #2575fc) 1',
                }
              }}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            {isConPasswordFocused && (
                <div
                  className="password-toggle-icon"
                  onMouseDown={handleMouseDown}
                  onClick={() => setShowConPassword(!showConPassword)}
                >
                  <FontAwesomeIcon icon={showConPassword ? faEyeSlash : faEye} />
                </div>
              )}
              </div>
          </div> */}
          <center><button type='submit' className="button">Register</button></center>
        </form>
        <div className="loginLink">
          <span>Already have an account? </span>
          <b className='login-redirect' onClick={handleLoginClick}>Login here</b>
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
    </div>
  );
}

export default Register;
