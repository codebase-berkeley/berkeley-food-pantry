import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './navbar.css';
import berkeleyfoodpantrylogo from './assets/berkeley-food-pantry-logo.png';

export default function NavbarComponent() {
   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbar-container"> 
                  <Link to="https://www.berkeleyfoodpantry.org/aboutus" className = "headerTags" >About the Pantry</Link>
                  <Link to="/stockListingAdmin" className = "headerTags" >Edit Today's Stock</Link>
                  <Link to="/" className = "headerTags">View Appointments</Link>
                  <Link to="/adminLogin" className = "headerTags">Login</Link>
            </ul>
      </div>
   )
}
