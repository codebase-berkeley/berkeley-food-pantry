import {useState} from 'react';
import React, { createContext, useContext } from "react";
import './google-oauth.css';
import GoogleLogin from 'react-google-login';

function GoogleOAuth() {
    const [loginData, setLoginData] = useState (
        localStorage.getItem('loginData')
        ? JSON.parse(localStorage.getItem('loginData'))
        : null
    );
    const handleFailure = (result) => {
        alert(result);
    };
    const handleLogin = async(googleData) => {
        const res = await fetch('/api/google-login', {
            method: 'POST',
            body: JSON.stringify({
                token: googleData.tokenId,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await res.json();
        setLoginData(data);
        localStorage.setItem('loginData', JSON.stringify(data));

    };
    const handleLogout = () => {
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    return (
        <div>
            <h1>React Google Login</h1>
            <div> 
                {
                    loginData ? (
                        <div>
                            <h3>You logged in as {loginData.email}</h3>
                            <button onClick = {handleLogout}>Logout</button>
                        </div>
                    )
                    : (
                        <GoogleLogin
                            clientId="856494336809-g00hpps6u34k4225k38flk9ftgmenqps.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}

                        ></GoogleLogin>

                    )}
            </div>

        </div>
               
    )
}

export default GoogleOAuth;
