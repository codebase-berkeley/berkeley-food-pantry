import './App.css';
import AdminLogin from './admin-login';
import NavbarComponent from './admin-login-navbar';
import MobileNavbar from './mobile-navbar';
import AddFood from './add_food';
import { StockListingUser, StockListingAdmin } from './stock_listing_admin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentScheduler from './appointment_scheduler';

// PAGES : Stock Listing Admin, Admin Login, Stock Listing User

function App() {
  return (
    <div className = "App">
  
      {/* <Router>
      <MobileNavbar/>
      <NavbarComponent/>

        <Routes>
          <Route path="/stockListingAdmin" element={<StockListingAdmin/>}/>
      
          <Route path = "/adminLogin" element={<AdminLogin/>}/>
        
          <Route path="/appointmentScheduler" element={<AppointmentScheduler/>}/>

          <Route path="addFood" element={<AddFood/>}/>

        </Routes>
      </Router>       */}
      <AddFood/>
    </div>
  )
}

export default App;
