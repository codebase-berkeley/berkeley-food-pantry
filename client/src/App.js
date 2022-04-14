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
          <Route path="/stockListingAdmin" element={<ViewAppointments/>}/>
      
          <Route path = "/adminLogin" element={<AdminLogin/>}/>

          <Route path="/thankyou" element={<AppointmentTY/>}/> 
        
          <Route path="/appointmentScheduler" element={<AppointmentScheduler/>}/>

          <Route path="/addFood" element={<AddFood/>}/>

          <Route path="/viewappointments" element={<ViewAppointments/>}/> 
          
        </Routes>
      </Router> 

    </div>
  )
}

export default App;
