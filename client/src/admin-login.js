import adminLoginPic from './assets/admin-login-pic.png';
import './admin-login.css';
import admingooglesignin from './assets/googlesignin.png';

export default function AdminLogin() {
   return(
    <div className = 'adminComponentContainer'>
        <img src={adminLoginPic} className = "adminPic" alt = "adminLogin"></img>
        <div className = 'adminLoginTextContainer'>
            <div><h1>Login</h1>    
            <p>Please sign in with an administrative account to <br></br>access additional features.</p>
            <img src={admingooglesignin} className = "admin-google-sign-in" alt = "google-sign-in"></img></div>
        </div>
    </div>
        
   )
}
