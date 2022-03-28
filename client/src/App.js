import './App.css';
import Food from './Food';
import apple from "./apple.png";
import AdminLogin from './admin-login';
import DesktopNavbar from './admin-login-navbar';
import MobileNavbar from './mobile-navbar';
import { StockListingUser, StockListingAdmin } from './stock_listing_admin.js'

function App() {
  return (
    <div className = "App">
      <MobileNavbar/>
      <DesktopNavbar/>
      
      <StockListingAdmin/>
    </div>
  )
}

export default App;
