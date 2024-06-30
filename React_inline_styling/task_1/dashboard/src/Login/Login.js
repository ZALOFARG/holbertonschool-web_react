import React from 'react';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
  loginInput: {
    display: 'flex',
    gap: '1rem',
    margin: '1rem 0'
  },
  loginInputButton: {
    backgroundColor: 'white',
    color: 'black',
    border: '2px solid #e7e7e7;',
    borderRadius: '8px',
    cursor: 'pointer',
  }
})

function Login() {
  const handleClick = (event) => {
    const inputId = event.target.htmlFor;
    document.querySelector('#inputId').focus();
  }

  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.loginInput)}>
        <label htmlFor='email' onClick={handleClick}>Email</label>
        <input type='email' id='email' />
        <label htmlFor='password' onClick={handleClick}>Password</label>
        <input type='password' id='password' />
        <button type='button' className={css(styles.loginInputButton)}>OK</button>
      </div>
    </>
  )
}

export default Login;