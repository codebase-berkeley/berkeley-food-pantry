import './AppointmentCard.css'
function AppointmentCard(props){
    return(
        <div className='centering'>
        <div className="cardContainer">
            <div className='appointmentInfo'>
                <div className='dateTime'>
                    {props.time}
                    {props.date}
                </div>
            </div>
            <div className='rightStyling'>

            </div>
        </div>
        </div>
    )

}
export default AppointmentCard;