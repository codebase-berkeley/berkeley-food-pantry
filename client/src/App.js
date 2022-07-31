import './App.css';
import React from 'react';
import AppointmentTY from './pages/AppointmentTY.js';
import AdminLoginNavbar from './pages/AdminLoginNavbar';
import MobileNavbar from './pages/MobNavbar';
import AddFood from './pages/AddFood.js';
import { StockListingUser, StockListingAdmin } from './pages/StockListingAdmin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentScheduler from './pages/AppointmentScheduler';
import AdminLogin from './pages/AdminLogin.js';
import { ViewAppointments } from './pages/ViewAppointments';

// PAGES : Stock Listing Admin, Admin Login, Stock Listing User, Appointment TY
// change admin login route before submitting pr

function App() {
  return (
    <div className = "App">

        <Router>
          <MobileNavbar/>

          <Routes>
            {/* User End  */}
            <Route path="/" element={<StockListingUser/>}/>
            <Route path="/view-stock" element={<StockListingUser/>}/>
            <Route path="/schedule-appointment" element={<AppointmentScheduler/>}/>
            <Route path="/thank-you" element={<AppointmentTY/>}/> 

            {/* Admin End  */}
            <Route path = "/login" element={<AdminLogin/>}/>
            <Route path="/edit-stock" element={<StockListingAdmin/>}/>
            <Route path="/add-food" element={<AddFood/>}/>
            <Route path="/view-appointments" element={<ViewAppointments/>}/> 
              
          </Routes>
        </Router> 

      </div>
  )
}

export default App;
