import adminLoginPic from './assets/admin-login-pic.png';
import './admin-login.css';

export default function AdminLogin() {
   return(
    <div>
        <img src={adminLoginPic} className = "adminPic" alt = "adminLogin"></img>

        <div>
            <h1>Login</h1>    
            <p>Please sign in with an administrative account to access additional features.</p>
        
        </div>
    </div>
    

    
    
   )
}