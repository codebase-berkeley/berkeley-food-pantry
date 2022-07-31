import adminLoginPic from './../images/carrots.svg';
import './AdminLogin.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginContext } from '../LoginContext';
import AdminLoginNavbar from './AdminLoginNavbar';
import googlesigninpic from './../images/googlesigninlogo.svg';

export default function AdminLogin() {
  const { loggedIn, setLoggedIn } = React.useContext(LoginContext);
  async function handleLogin(response) {
    console.log(response);
    setLoggedIn(true);
  }

  return (
    <>
      <AdminLoginNavbar isAdmin={false} />
      <div className='admin-component-container'>
        <img src={adminLoginPic} className='admin-pic' alt='admin-login'></img>
        <div className='admin-login-text-container'>
          <div>
            <h1>Login</h1>
            <div>
              <p>
                Please sign in with an administrative account to access
                additional features.
              </p>
            </div>
            <a
              className='google-sign-in-button'
              href='http://localhost:4000/auth/google'
            >
              <img
                src={googlesigninpic}
                className='google-sign-in-logo'
                alt='google sign in logo'
              ></img>
              <div className='google-sign-in-link'>Sign in with Google</div>
            </a>
          </div>
        </div>
        <Helmet>
          <title>Login</title>
        </Helmet>
      </div>
    </>
  );
}
