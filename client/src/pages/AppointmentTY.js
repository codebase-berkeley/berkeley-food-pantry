import circleImage from './../images/thankyou.png';
import { useLocation } from "react-router-dom";
import './AppointmentTY.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from 'react-helmet';
import AdminLoginNavbar from './AdminLoginNavbar';

export default function AppointmentTY(props) {
    const location = useLocation();
    const dateSelected = location.state?.date;
    const timeSelected = location.state?.time;

   return(
    <>
    <AdminLoginNavbar isAdmin={false}/>

    <div className = 'thankyou-full-page'>
            
            <div className = 'thankyou-information-display'>

                <div className = 'thankyou-confirmation-text'>
                    
                    <h1>Thank you!</h1>   

                    <p id="thankyou-description-text">Thank you so much for scheduling an appointment with us; we look forward to seeing you!</p>
                    <p id="thankyou-description-text">Your appointment is scheduled for</p>
                    <p id="thankyou-time-text">{dateSelected} at {timeSelected}</p>
                    
                    <p id="thankyou-description-text">Please note down this time.</p>
                    <p id="thankyou-description-text">Before you visit, remember to take a look at our <a id="thankyou-weblink" href="https://www.berkeleyfoodpantry.org/needfood">FAQ for visiting the pantry.</a></p>
                
                    <div className = 'thankyou-appt-button-container'>
                        <Link to="/schedule-appointment" className = "thankyou-appt-button" style ={{textDecoration: 'none'}}>Schedule New Appointment</Link>
                    </div>
                </div>

            </div>
            
            <div >
                <img src={circleImage} className = "thankyou-circle-pic" alt = "admin-login"></img>
            </div>
            
            <Helmet>
                <title>Thank you!</title>
            </Helmet>
    </div>
    </>
        
   )
}
