import './App.css';
import AdminLogin from './pages/AdminLogin.js';
import NavbarComponent from './pages/AdminLoginNavbar';
import MobileNavbar from './pages/MobNavbar';
import AddFood from './pages/AddFood.js';
import { StockListingUser, StockListingAdmin } from './pages/StockListingAdmin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentScheduler from './pages/AppointmentScheduler';

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
        
          <Route path="/appointmentScheduler" element={<AppointmentScheduler/>}/>

          <Route path="/addFood" element={<AddFood/>} />

        </Routes>
      </Router>      
    </div>
  )
}

export default App;
