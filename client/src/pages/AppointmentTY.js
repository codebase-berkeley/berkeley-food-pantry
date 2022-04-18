import circleImage from './../images/thankyou.png';
import { useLocation } from "react-router-dom";
import AppointmentScheduler from './AppointmentScheduler';
import './AppointmentTY.css';
import UploadImageButton from '../components/UploadImageButton';
import { Button } from 'bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ContactsOutlined } from '@mui/icons-material';

export default function AppointmentTY(props) {
    const location = useLocation();
    const dateSelected = location.state?.date;
    const timeSelected = location.state?.time;

   return(
    <div className = 'ty-full-page'>
            
            <div className = 'ty-information-display'>

                <div className = 'ty-confirmation-text'>
                    
                    <h1>Thank you!</h1>   

                    <p id="ty-description-text">Thank you so much for scheduling an appointment with us; we look forward to seeing you!</p>
                    <p id="ty-description-text">Your appointment is scheduled for</p>
                    <p id="ty-time-text">{dateSelected} at {timeSelected}</p>
                    
                    <p id="ty-description-text">Please note down this time.</p>
                    <p id="ty-description-text">Before you visit, remember to take a look at our <a id="weblink" href="https://www.berkeleyfoodpantry.org/needfood">FAQ for visiting the pantry.</a></p>
                
                </div>

                <div className = 'ty-appt-button-container'>
                    <Link to="/appointmentScheduler" className = "ty-appt-button" style ={{textDecoration: 'none'}}>Schedule New Appointment</Link>
                </div>

            </div>
            
            <div >
                <img src={circleImage} className = "ty-circle-pic" alt = "admin-login"></img>
            </div>
            
    </div>
        
   )
}
