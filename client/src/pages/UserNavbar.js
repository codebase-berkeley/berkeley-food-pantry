import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import berkeleyfoodpantrylogo from './../images/berkeley-food-pantry-logo.png';

export default function AdminLoginNavbar() {
   
   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbar-container"> 
                  <Link to="https://www.berkeleyfoodpantry.org/aboutus" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</Link>
                  <Link to="/stockListingAdmin" className = "headerTags" style={{ textDecoration: 'none' }}>View Today's Stock</Link>
                  <Link to="/appointmentScheduler" className = "headerTags" style={{ textDecoration: 'none' }}>Schedule Appointment</Link>
                  <Link to="/adminLogin" className = "headerTags" style={{ textDecoration: 'none' }}>Login</Link>
            </ul>
      </div>
   )
}
