import './App.css';
import Food from './Food';
import apple from "./apple.png";
import AdminLogin from './admin-login';
import NavbarComponent from './admin-login-navbar';
import Navbar from './mobile-navbar';
import StockListingUser from './stock_listing_admin.js'

function App() {
  return (
    <div className = "App">
      <Navbar/>
      <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
      <StockListingUser></StockListingUser>
    </div>
  )
}

export default App;
