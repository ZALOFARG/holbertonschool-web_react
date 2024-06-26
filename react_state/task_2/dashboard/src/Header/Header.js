import React, { Component, Fragment } from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

import AppContext from '../App/AppContext';

class Header extends Component {
   render() {
      const { user, logOut } = this.context;
      return (
        <Fragment>
          <div className={css(styles.header)}>
              <img src={logo} className={css(styles.logo)} alt='logo' />
              <h1 className={css(styles.heading1)}>School dashboard</h1>
          </div>
          {user.isLoggedIn && (
            <div id='logoutSection'>
              <p>
                Welcome <strong>{user.email} </strong>
                <em onClick={logOut}>
                  (logout)
                </em>
                </p>
                </div>
          )}
          </Fragment>
      );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottom: '3px solid #e1345b',
    height: '250px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  logo: {
    width: '200px',
    height: '200px'
  },
  heading1: {
    display: 'inline',
    position: 'relative',
    color: '#e1345b'
  },
});

Header.contextType = AppContext;

export default Header;