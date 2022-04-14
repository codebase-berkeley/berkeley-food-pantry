import React from 'react'
import './DummyAppointment.css'
import Tags from './Tags.js'
import edit_item from './../images/edit_item.png'
import pen from './../images/pen.svg'

function DummyAppointment(props) {
    function editItem () {
        console.log("it works");
    }

    return(
        <div className = "componentContainer">
            <div className = "infoContainer">
                <div className = "nameTags">
                    <div className = "date-and-time">
                        {props.date}
                        <br></br>
                        {props.time}
                    </div>
                    <div className = "name">
                        {props.firstname} {props.lastname}
                    </div>
                    
                </div>
                <div className = "editIn">
                    <div>
                        <button className="editButton" onClick={editItem}>
                            <div className="editItem">
                                Mark as Visited
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );   
}

export default DummyAppointment
