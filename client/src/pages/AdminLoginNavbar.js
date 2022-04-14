import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './Navbar.css';
import berkeleyfoodpantrylogo from './../images/berkeley-food-pantry-logo.png';
import React, { useState } from 'react';

export default function AdminLoginNavbar() {

   const [admin, setAdmin] = useState(false);

    function setDisplay() {
        if (admin) {
            return(
               <ul className = "navbar-container">
               <Link to="/stockListingAdmin" className = "headerTags" style={{ textDecoration: 'none' }} >Edit Today's Stock</Link>
               <Link to="/appointmentScheduler" className = "headerTags" style={{ textDecoration: 'none' }}>View Appointments</Link>
               </ul>
            )
        }

        return(
         <ul className = "navbar-container">
         <Link to="/stockListingAdmin" className = "headerTags" style={{ textDecoration: 'none' }} >View Today's Stock</Link>
         <Link to="/appointmentScheduler" className = "headerTags" style={{ textDecoration: 'none' }}>Schedule Appointment</Link>
         </ul>
        )
    }


   return(
      <div className= "navbarContainer">
         <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
            <ul className = "navbar-container"> 
                  <Link to="https://www.berkeleyfoodpantry.org/aboutus" className = "headerTags" style={{ textDecoration: 'none'}} >About the Pantry</Link>
                  {setDisplay()}
                  <Link to="/adminLogin" className = "headerTags" style={{ textDecoration: 'none' }}>Login</Link>
            </ul>
      </div>
   )
}
