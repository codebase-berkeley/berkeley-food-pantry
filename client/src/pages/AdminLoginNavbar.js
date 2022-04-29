import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import berkeleyfoodpantrylogo from './../images/berkeley-food-pantry-logo.png';
import React, {useEffect} from 'react';
export default function AdminLoginNavbar({isAdmin}) {

   if(isAdmin) {
      return(
         <div className= "navbarContainer">
            <Link to ="/edit-stock"><img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img></Link>
               <ul className = "navbar-container"> 
                     <a href="https://www.berkeleyfoodpantry.org/aboutus" 
                           target="_blank" rel="noopener noreferrer" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</a>
                     <Link to="/edit-stock" className = "headerTags" style={{ textDecoration: 'none' }} >Edit Today's Stock</Link>
                     <Link to="/view-appointments" className = "headerTags" style={{ textDecoration: 'none' }}>View Appointments</Link>
                     <a href="http://localhost:4000/logout" className = "headerTags" style={{ textDecoration: 'none' }}>Logout</a>
               </ul>
         </div>
      )
   } else {
      return(
         <div className= "navbarContainer">
            <Link to ="/view-stock"><img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img></Link>
               <ul className = "navbar-container"> 
                     <a href="https://www.berkeleyfoodpantry.org/aboutus" 
                           target="_blank" rel="noopener noreferrer" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</a>
                     <Link to="/view-stock" className = "headerTags" style={{ textDecoration: 'none' }} >View Today's Stock</Link>
                     <Link to="/schedule-appointment" className = "headerTags" style={{ textDecoration: 'none' }}>Make Appointment</Link>
                     <Link to="/login" className = "headerTags" style={{ textDecoration: 'none' }}>Login</Link>
               </ul>
         </div>
      )

   }

   
}
