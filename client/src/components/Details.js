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
                    <img src={darkCheckMark} className = 'checkMark'></img>
                    <div className='marked'> Mark as visited </div> 
                </button>
            )
        }
    }


    return (
        <div className = "container">

            <div className = "first-chunk">
              <div className = "not-button">
                <div className = "date-time">
                  <div className='date'> {props.date} </div>
                  <div className='time'> {props.time} </div>
                </div>
                <div className='name'> {props.name} </div>
                <div className="contact-email-phone">
                  <h1 className='details_header'>Contact</h1>
                  <h1 className='details_email'>{props.email}</h1>
                  <h1 className='details_phoneNumber'>{props.phoneNumber}</h1>
                </div>
              </div>
              <div className='visitedButton'>{beenVisited()}</div>
              
            </div>
            

            <div><ColoredLine color="#ACB9AC" /></div>


            <div className = "second-chunk">
              <h1 className='details_header'> Dietary Preferences</h1>
              <div className = "diet-prefs" id="myList">{props.dietary_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            </div>
            
            
            <div><ColoredLine color="#ACB9AC" /></div>

            <div className ="third-chunk">
              <h1 className="details_header">Item Preferences</h1>
              <div className = "diet-prefs" id="myList">{props.item_data.map((data, index) => (<li key={index}>{data}</li>))}</div>
            </div>
            
            <div><ColoredLine color="#ACB9AC" /></div>

            <div className="fourth-chunk">
              <h1 className = 'details_header'>Notes</h1>
              <div className ="diet-prefs">None, thank you!</div>
            </div>
            
        </div>
        


    )
    
}
export default Details;