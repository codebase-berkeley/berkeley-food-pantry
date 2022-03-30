import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './navbar.css';
import berkeleyfoodpantrylogo from './assets/berkeley-food-pantry-logo.png';

export default function NavbarComponent() {
   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbar-container"> 
                  <Link to="https://www.berkeleyfoodpantry.org/aboutus" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</Link>
                  <Link to="/stockListingAdmin" className = "headerTags" style={{ textDecoration: 'none' }} >Edit Today's Stock</Link>
                  <Link to="/" className = "headerTags" style={{ textDecoration: 'none' }}>View Appointments</Link>
                  <Link to="/adminLogin" className = "headerTags" style={{ textDecoration: 'none' }}>Login</Link>
            </ul>
      </div>
   )
}
