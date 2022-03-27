import './appointment_scheduler.css'

export default function AppointmentScheduler() {
    return (
        <div>
            <div className = 'intro-text-container'>
                <h1 className = 'intro-text'>Welcome to the Berkeley Food Pantry! 
                    <span class='intro-text-pt2'><br></br>Please fill out the following form to schedule an appointment.</span>
                </h1>    
            </div>
            <div className = 'main-appointment-scheduler-container'>
                <div className = 'main-appointment-scheduler-left'>
                    <h1 className = 'step-1-heading'>Step 1: Choose your appointment time.</h1>
                </div>
                <div className = 'main-appointment-scheduler-right'>
                    <h1 className = 'step-2-heading'>Step 2: Fill in your information.</h1>
                </div>   
            </div>
            <div className = 'button-container'>
                <div className = 'clear-all-button'> 
                    <h1 className = 'clear-all'>Clear all</h1>     
                </div>
                <div className = 'submit-button'> 
                    <h1 className = 'submit'>Submit</h1>     
                </div>
            </div>
        </div>
    )
}

