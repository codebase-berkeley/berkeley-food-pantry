import './AppointmentCard.css'
import checkMark from './../images/checkMark.svg'
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
                <button className="notVisitedButton" onClick = {setVisitedHelper}> 
                    <img src={visitedMark} className = 'checkMark'></img>
                    <div className='markAs'> Visited! </div> 
                </button>
            )
        } else {
            return (
                <button className="beenVisitedButton" onClick={setVisitedHelper}> 
                    <img src={checkMark} className = 'checkMark'></img>
                    <div className='marked'> Mark as visited </div> 
                </button>
            )
        }
    }

    return(
        <div className='centering'>
        <div className="cardContainer">
            <div className='leftStyling'>
                <div className='appointmentInfo'>
                    <div className='date'> {props.date} </div>
                    <div className='time'> {props.time} </div>
                    <div className='name'> {props.firstName} {props.lastName} </div>
                </div>
                <div className='visitedButton'>
                    {beenVisited()}
                </div>
            </div>

            <div className='rightStyling'>

            </div>
        </div>
        </div>
    )

}
export default AppointmentCard;