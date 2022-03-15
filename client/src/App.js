import './App.css';
import AdminLogin from './admin-login';
import NavbarComponent from './admin-login-navbar';

function App() {
  return (
    <div className = "App" > 
      <NavbarComponent/>
      <AdminLogin/> 
    </div>
  )
}

export default App;
