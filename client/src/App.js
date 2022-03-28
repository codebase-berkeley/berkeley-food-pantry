import './App.css';
import Food from './Food';
import apple from "./apple.png";
import AdminLogin from './admin-login';
import NavbarComponent from './admin-login-navbar';
import Navbar from './mobile-navbar';

function App() {
  return (
    <div className = "App" > 
      {/* <NavbarComponent/>
      <AdminLogin/>  */}
      <Navbar/>
      <Food name="Apple" image={apple} in_stock={true} tags={["Vegetarian", "Vegan", "Gluten-free", "Fruit", "Fruit" ]} />
    </div>
  )
}

export default App;
