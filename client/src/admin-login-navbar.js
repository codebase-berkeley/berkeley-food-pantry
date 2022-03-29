import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './navbar.css';
import berkeleyfoodpantrylogo from './assets/berkeley-food-pantry-logo.png';

export default function NavbarComponent() {
   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbarStyle">
               <li><a href="https://www.berkeleyfoodpantry.org/aboutus" target="_blank">About the Pantry</a></li> 
                  <Link to="/stockListingAdmin" className = "" >Edit Today's Stock</Link>
                  <Link to="/" className = "">View Appointments</Link>
                  <Link to="/adminLogin" className = "">Log in</Link>
            </ul>
      </div>
   )
}
