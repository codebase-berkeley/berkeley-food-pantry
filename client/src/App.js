import './App.css';
import AdminLogin from './admin-login';
import NavbarComponent from './admin-login-navbar';
import MobileNavbar from './mobile-navbar';
import AppointmentScheduler from './appointment_scheduler';
import { StockListingUser, StockListingAdmin } from './stock_listing_admin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// PAGES : Stock Listing Admin, Admin Login, Stock Listing User

function App() {
  return (
    <div className = "App">
  
      <Router>
      <MobileNavbar/>
      <NavbarComponent/>

        <Routes>
          <Route path="/stockListingAdmin" element={<StockListingAdmin/>}/>
      
          <Route path = "/adminLogin" element={<AdminLogin/>}/>
        
          <Route path="/" element={<StockListingUser/>}/>

          <Route path = "/schedule" element={<AppointmentScheduler/>}/>
        </Routes>
      </Router>      
    </div>
  )
}

export default App;
