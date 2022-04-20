import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import berkeleyfoodpantrylogo from './../images/berkeley-food-pantry-logo.png';

export default function AdminLoginNavbar() {
   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbar-container"> 
                  <a href="https://www.berkeleyfoodpantry.org/aboutus" 
                        target="_blank" rel="noopener noreferrer" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</a>
                  <Link to="/view-stock" className = "headerTags" style={{ textDecoration: 'none' }} >Edit Today's Stock</Link>
                  <Link to="/schedule-appointment" className = "headerTags" style={{ textDecoration: 'none' }}>View Appointments</Link>
                  <Link to="/login" className = "headerTags" style={{ textDecoration: 'none' }}>Login</Link>
            </ul>
      </div>
   )
}
