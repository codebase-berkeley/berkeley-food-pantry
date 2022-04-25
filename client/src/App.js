import './App.css';
import AppointmentTY from './pages/AppointmentTY.js';
import AdminLoginNavbar from './pages/AdminLoginNavbar';
import MobileNavbar from './pages/MobNavbar';
import AddFood from './pages/AddFood.js';
import { StockListingUser, StockListingAdmin } from './pages/StockListingAdmin.js'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppointmentScheduler from './pages/AppointmentScheduler';
import AdminLogin from './pages/AdminLogin.js';
import { ViewAppointments } from './pages/ViewAppointments';
import Details from './components/Details';
import Food from './components/Food.js'
import AppointmentCard from './components/AppointmentCard.js'

// PAGES : Stock Listing Admin, Admin Login, Stock Listing User, Appointment TY
// change admin login route before submitting pr

function App() {
  const data_dietary = ['Im lactose introlerant lol', 'Gluten Free', 'Include Dog Food'];
  const data_item = ['Broccoli', 'Milk', 'Canned Beans', 'Steak', 'Apple', 'Oranges'];
  return (
    <div className = "App">

      <Router>
      <MobileNavbar/>
      <AdminLoginNavbar/>

      <Routes>
          <Route path="/edit-stock" element={<StockListingAdmin/>}/>
          <Route path="/view-stock" element={<StockListingUser/>}/>
          <Route path="/" element={<StockListingUser/>}/>
      
          <Route path = "/login" element={<AdminLogin/>}/>

          <Route path="/thank-you" element={<AppointmentTY/>}/> 
        
          <Route path="/schedule-appointment" element={<AppointmentScheduler/>}/>

          <Route path="/add-food" element={<AddFood/>}/>

          <Route path="/view-appointments" element={<ViewAppointments/>}/> 
          
        </Routes>
      </Router> 

    </div>
  )
}

export default App;
