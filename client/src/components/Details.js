import './Details.css';
import darkCheckMark from './../images/darkCheckMark.svg'
import visitedMark from './../images/visitedMark.svg'
import React, { useState, useEffect } from 'react';

function Details(props) {
    let dietary_data = ['Vegan', 'Gluten Free', 'Include Dog Food'];
    let item_data = ['Salmon', 'Broccoli', 'Milk', 'Canned Beans', 'Steak', 'Apple', 'Oranges'];
    const ColoredLine = ({ color }) => (
        <hr
          style={{
            color: color ,
            opacity: 1,
            height: 2
          }}
        />
      );


      const [visited, setVisited] = useState(props.visited);
    
      function setVisitedHelper() {
        setVisited(!visited)
        props.card.visited = !props.card.visited;
      }

      function beenVisited() {
        console.log(props.card);
        if (visited == true) {
            // note to self, add onClick functionality to update database if checkmark is clicked
            return (
                <button className="details-notVisitedButton" onClick={setVisitedHelper}> 
                    <img src={visitedMark} className = 'details-checkMark'></img>
                    <div className='details-markAs'> Visited! </div> 
                    
                </button>
                
            )
        } else {
            return (
                <button className="details-beenVisitedButton" onClick={setVisitedHelper}> 
                    <img src={darkCheckMark} className = 'details-checkMark'></img>
                    <div className='details-marked'> Mark as visited </div> 
                </button>
            )
        }
    }


    return (
        <div className = "details-container">

            <div className = "details-first-chunk">
              <div className = "details-not-button">
                <div className = "details-date-time">
                  <div className='details-date'> {props.date} </div>
                  <div className='details-time'> {props.time} </div>
                </div>
                <div className='details-name'> {props.firstName} {props.lastName} </div>
                <div className="details-contact-email-phone">
                  <h1 className='details-header'>Contact</h1>
                  <h1 className='details-email'>{props.email}</h1>
                  <h1 className='details-phoneNumber'>{props.phoneNumber}</h1>
                </div>
              </div>
              <div className='details-visitedButton'>{beenVisited()}</div>
              
            </div>
            

            <div><ColoredLine color="#ACB9AC" /></div>


            <div className = "details-second-chunk">
              <h1 className='details-header'> Dietary Preferences</h1>
              <div className = "details-diet-prefs" id="myList">{props.dietary_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            </div>
            
            
            <div><ColoredLine color="#ACB9AC" /></div>

            <div className ="details-third-chunk">
              <h1 className="details-header">Item Preferences</h1>
              <div className = "details-diet-prefs" id="myList">{props.item_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            </div>
            
            <div><ColoredLine color="#ACB9AC" /></div>

            <div className="details-fourth-chunk">
              <h1 className = 'details-header'>Notes</h1>
              <div className ="details-diet-prefs">{props.notes}</div>
            </div>
            
        </div>
        


    )
    
}
export default Details;