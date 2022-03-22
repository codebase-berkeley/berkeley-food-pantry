import adminLoginPic from './assets/carrots.svg';
import './admin-login.css';
import admingooglesignin from './assets/googlePic.svg';

export default function AdminLogin() {
   return(
    <div className = 'admin-component-container'>
            <img src={adminLoginPic} className = "admin-pic" alt = "admin-login"></img>
            <div className = 'admin-login-text-container'>
                <div>
                    <h1>Login</h1>   
                    <div>
                        <p>Please sign in with an administrative account to access additional features.</p>
                    </div>
                    <div className = "google-sign-in-button-div">
                        <img src={admingooglesignin} className = "admin-google-sign-in" alt = "google-sign-in"></img>
                    </div>
                </div>
            </div>
    </div>
        
   )
}
