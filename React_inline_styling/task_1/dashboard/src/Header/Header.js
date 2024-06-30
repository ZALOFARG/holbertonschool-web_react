import React from 'react';
import hbtnLogo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: 'calc(10px + 2vmin)',
    color: '#e0354b',
    width: '100%'
  },
  logo: {
    height: '40vmin'
  }
})

function Header() {

  return (
    <div className={css(styles.header)}>
      <img src={hbtnLogo} className={css(styles.logo)} alt="logo"  />
      <h1>School dashboard</h1>
    </div>
  );
};

export default Header;