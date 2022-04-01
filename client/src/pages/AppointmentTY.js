import circleImage from './../images/thankyou.png';
import './AppointmentTY.css';

export default function AppointmentTY() {
   return(
    <div className = 'admin-component-container'>
            
            <div className = 'information-display'>

                <div className = 'confirmation-text'>
                    
                    <h1>Thank you!</h1>   
                    <p id="description-text">Thank you so much for scheduling an appointment with us; we look forward to seeing you!</p>
                    <p id="description-text">Your appointment is scheduled for</p>
                    <p id="time-text">Wednesday, March 30th at 2:30 PM</p>
                    <p id="description-text">Please note down this time.</p>
                    <p id="description-text">Before you visit, remember to take a look at our <a id="weblink" href="https://www.google.com/">FAQ for visiting the pantry.</a></p>
                
                </div>

                <div className = 'new-appt-button'>
                    <p>button placeholder</p>
                </div>

            </div>
            
            <div >
                <img src={circleImage} className = "circle-pic" alt = "admin-login"></img>
            </div>
            
    </div>
        
   )
}
