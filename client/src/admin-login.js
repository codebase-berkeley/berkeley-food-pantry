import adminLoginPic from './assets/admin-login-pic.png';
import './admin-login.css';
import admingooglesignin from './assets/google-sign-in.png';
import {GoogleLogin} from 'react-google-login';


export default function AdminLogin() {
   return(
    <div className = 'admin-component-container'>
        <img src={adminLoginPic} className = "admin-pic" alt = "admin-login"></img>
        <div className = 'admin-login-text-container'>
            <div>
                <h1>Login</h1>    
                <p>Please sign in with an administrative account to <br></br> access additional features.</p>
                <GoogleLogin
                            clientId="856494336809-g00hpps6u34k4225k38flk9ftgmenqps.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={handleLogin}
                            onFailure={handleFailure}
                            cookiePolicy={'single_host_origin'}>
                        
                </GoogleLogin>
                        
            </div>
        </div>
    </div>
        
   )
}
