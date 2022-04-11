import './AppointmentCard.css'
function AppointmentCard(props){
    function beenVisited() {
        if (props.visited == true) {
            return "Visited!"
        } else {
            return "Mark as visited"
        }
    }
    return(
        <div className='centering'>
        <div className="cardContainer">
            <div className='leftStyling'>
                <div className='appointmentInfo'>
                    <div className='date'> {props.date} </div>
                    <div className='time'> {props.time} </div>
                    <div className='name'> {props.name} </div>
                </div>
                <div className='visitedButton'>
                    <button className="button"> Mark as visited </button>
                </div>
            </div>

            <div className='rightStyling'>

            </div>
        </div>
        </div>
    )

}
export default AppointmentCard;