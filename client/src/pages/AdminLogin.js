import adminLoginPic from './../images/carrots.svg';
import './AdminLogin.css';
import admingooglesignin from './../images/googlePic.png';
import React from 'react';
import { Helmet } from 'react-helmet';
import {GoogleLogin} from 'react-google-login';
import { LoginContext } from '../LoginContext';


export default function AdminLogin() {
    const { loggedIn, setLoggedIn } = React.useContext(LoginContext) 
    async function handleLogin(response) {
        /** 
        const res = await fetch("/api/v1/auth/google", {
            method: "POST",
            body: JSON.stringify({
            token: response.tokenId
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await res.json()
        */
        setLoggedIn(true)
    }

    function handleFailure() {

    }
   return(
    <div className = 'admin-component-container'>
            <img src={adminLoginPic} className = "admin-pic" alt = "admin-login"></img>
            <div className = 'admin-login-text-container'>
                <div>
                    <h1>Login</h1>   
                    <div>
                        <p>Please sign in with an administrative account to access additional features.</p>
                    </div>
                    <GoogleLogin
                            clientId="856494336809-g00hpps6u34k4225k38flk9ftgmenqps.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}>
                        
                    </GoogleLogin>
                </div>
            </div>
        <Helmet>
            <title>Login</title>
       </Helmet>
    </div>
         
   )
}
