import React from 'react';
import './Login.css';

function Login() {
  const handleClick = (event) => {
    const inputId = event.target.htmlFor;
    document.querySelector('#inputId').focus();
  }

  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className='Login-input'>
        <label htmlFor='email' onClick={handleClick}>Email</label>
        <input type='email' id='email' />
        <label htmlFor='password' onClick={handleClick}>Password</label>
        <input type='password' id='password' />
        <button type='button'>OK</button>
      </div>
    </>
  )
}

export default Login;