import './mobile-navbar.css';
import bfpLogo from './assets/bfpLogo.svg';
import dropdownIcon from './assets/dropdown-icon.svg'

function MobNav() {
    return (
        <div className='navBar'>
            <img src = {bfpLogo} className = "logo"></img>
            <button type='button' className='dropdownbtn'>
                <img src = {dropdownIcon} className = "icon"></img>
            </button>
        </div>
    )
}

export default MobNav;