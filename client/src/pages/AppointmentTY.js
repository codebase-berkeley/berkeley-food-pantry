import circleImage from './../Images/thankyou.png';
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
    <div className = 'full-page'>
            
            <div className = 'information-display'>

                <div className = 'confirmation-text'>
                    
                    <h1>Thank you!</h1>   

                    <p id="description-text">Thank you so much for scheduling an appointment with us; we look forward to seeing you!</p>
                    <p id="description-text">Your appointment is scheduled for</p>
                    <p id="time-text">{dateSelected} at {timeSelected}</p>
                    
                    <p id="description-text">Please note down this time.</p>
                    <p id="description-text">Before you visit, remember to take a look at our <a id="weblink" href="https://www.berkeleyfoodpantry.org/needfood">FAQ for visiting the pantry.</a></p>
                
                </div>

                <div className = 'appt-button-container'>
                    <Link to="/appointmentScheduler" className = "appt-button" style ={{textDecoration: 'none'}}>Schedule New Appointment</Link>
                </div>

            </div>
            
            <div >
                <img src={circleImage} className = "circle-pic" alt = "admin-login"></img>
            </div>
            
    </div>
        
   )
}