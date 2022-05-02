import './AppointmentCard.css'
import checkMark from './../images/unvisitedMark.svg'
import visitedMark from './../images/visitedMark.svg'
import React, { useState, useEffect } from 'react';


function AppointmentCard(props){

    const [visited, setVisited] = useState(props.visited);

    function setVisitedHelper() {
        setVisited(!visited)
        console.log(visited)
    }

    function beenVisited() {
        if (visited == true) {
            // note to self, add onClick functionality to update database if checkmark is clicked
            return (
                // <button className="appointment-card-notVisitedButton" onClick = {setVisitedHelper}> 
                    // <img src={visitedMark} className = 'appointment-card-checkMark'></img>
                    <div className='appointment-card-markAs'> Visited! </div> 
                
            )
        } else {
            return (
                // <button className="appointment-card-beenVisitedButton" onClick={setVisitedHelper}> 
                    // <img src={checkMark} className = 'appointment-card-checkMark'></img>
                    <div className='appointment-card-marked'> Mark as visited </div> 
                // </button>
            )
        }
    }

    return(
        <div className="appointment-card-cardContainer" onClick={() => props.onclickFunc(props.id)}>
            <div className='appointment-card-leftStyling'>
                <div className='appointment-card-appointmentInfo'>
                    <div className='appointment-card-date'> {props.date} </div>
                    <div className='appointment-card-time'> {props.time} </div>
                    <div className='appointment-card-name'> {props.firstName} {props.lastName} </div>
                </div>
                <div className='appointment-card-visitedButton'>
                    {beenVisited()}
                </div>
            </div>

            <div className='appointment-card-rightStyling'>

            </div>
        </div>
    )

}

export default AppointmentCard;
