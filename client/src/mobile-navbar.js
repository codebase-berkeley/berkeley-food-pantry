import './mobile-navbar.css';
import bfpLogo from './assets/bfpLogo.svg';
import dropdownIcon from './assets/dropdown-icon.svg'
import Dropdown from './mobile-navbar-dropdown';


function MobNav() {
    return (
        <div className='navBar'>
            <img src = {bfpLogo} className = "logo"></img>
            <button>
                <img src = {dropdownIcon} className = "icon"></img>
            </button>
        </div>
        
    )
}

export default MobNav;