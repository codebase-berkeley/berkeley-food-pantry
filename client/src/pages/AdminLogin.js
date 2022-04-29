import adminLoginPic from './../images/carrots.svg';
import './AdminLogin.css';
import admingooglesignin from './../images/googlePic.png';
import React from 'react';
import { Helmet } from 'react-helmet';
import { LoginContext } from '../LoginContext';
import AdminLoginNavbar from './AdminLoginNavbar';


export default function AdminLogin() {
    const { loggedIn, setLoggedIn } = React.useContext(LoginContext) 
    async function handleLogin(response) {
        console.log(response)
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
    <>
    <AdminLoginNavbar isAdmin={false}/>
    <div className = 'admin-component-container'>
            <img src={adminLoginPic} className = "admin-pic" alt = "admin-login"></img>
            <div className = 'admin-login-text-container'>
                <div>
                    <h1>Login</h1>   
                    <div>
                        <p>Please sign in with an administrative account to access additional features.</p>
                    </div>
                    <a href="http://localhost:4000/auth/google">login to google!</a>
                </div>
            </div>
        <Helmet>
            <title>Login</title>
       </Helmet>
    </div>
    </>
         
   )
}
