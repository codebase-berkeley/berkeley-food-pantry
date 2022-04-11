import './App.css';
import AppointmentTY from './pages/AppointmentTY.js';
import AdminLoginNavbar from './pages/AdminLoginNavbar';
import MobileNavbar from './pages/MobNavbar';
import AddFood from './pages/AddFood.js';
import { StockListingUser, StockListingAdmin } from './pages/StockListingAdmin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentScheduler from './pages/AppointmentScheduler';
import AdminLogin from './pages/AdminLogin.js';
import Food from './components/Food.js'
import AppointmentCard from './components/AppointmentCard.js'
import apple from "./images/apple.png";

// PAGES : Stock Listing Admin, Admin Login, Stock Listing User, Appointment TY
// change admin login route before submitting pr

function App() {
  return (
    <div className = "App">

      <Router>
      <MobileNavbar/>
      <AdminLoginNavbar/>

        <Routes>
          <Route path="/stockListingAdmin" element={<StockListingAdmin/>}/>
      
          <Route path = "/adminLogin" element={<AdminLogin/>}/>

          <Route path="/thankyou" element={<AppointmentTY/>}/> 
        
          <Route path="/appointmentScheduler" element={<AppointmentScheduler/>}/>

          <Route path="/addFood" element={<AddFood/>}/>

        </Routes>
      </Router> 

    </div>
    // <AppointmentCard firstName = "Abigail" lastName = "Brooks" time = "4:20 pm" date = "Wednesday April 20, 2022" visited = {true} />
  )
}

export default App;
