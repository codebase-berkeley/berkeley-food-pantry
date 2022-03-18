import './navbar.css';
import berkeleyfoodpantrylogo from './assets/berkeley-food-pantry-logo.png';

export default function NavbarComponent() {
   return(
    <div className= "navbarContainer">
     <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
    <ul className = "navbarStyle">
                <li><a href="#">About the Pantry</a></li>
                <li><a href="#">Edit Today's Stock</a></li>
                <li><a href="#">View Appointments</a></li>
                <li><a href="#">Login</a></li>
    </ul>
</div>
   )
}
