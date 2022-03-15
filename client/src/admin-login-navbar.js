import './navbar.css';
import berkeleyfoodpantrylogo from './assets/berkeleyfoodpantrylogo.png';

export default function NavbarComponent() {
   return(
    <div className= "navbarContainer">
     <img src={berkeleyfoodpantrylogo} className = "navbarLogo" alt = "navbar logo"></img>
    <ul className = "navbarStyle">
        {/* <div> */}
              {/* <ul className=""> */}
                <li><a href="#">About the Pantry</a></li>
                <li><a href="#">Edit Today's Stock</a></li>
                <li><a href="#">View Appointments</a></li>
                <li><a href="#">Login</a></li>
              {/* </ul> */}
            {/* </div> */}
    </ul>
</div>
   )
    
}
