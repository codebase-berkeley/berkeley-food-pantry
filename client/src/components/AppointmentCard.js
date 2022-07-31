import './AppointmentCard.css';
import checkMark from './../images/unvisitedMark.svg';
import visitedMark from './../images/visitedMark.svg';
import React, { useState, useEffect } from 'react';
import { rendererTypeName } from 'prettier';
import { render } from 'react-dom';
import axios from 'axios';

function AppointmentCard(props) {
  function beenVisited() {
    if (props.visited) {
      // note to self, add onClick functionality to update database if checkmark is clicked
      return <div className='appointment-card-markAs'> Visited! </div>;
    } else {
      return <div className='appointment-card-marked'> Not visited </div>;
    }
  }

  return (
    <div
      className='appointment-card-cardContainer'
      onClick={() => props.onclickFunc(props.id)}
    >
      <div className='appointment-card-leftStyling'>
        <div className='appointment-card-appointmentInfo'>
          <div className='appointment-card-date'> {props.date} </div>
          <div className='appointment-card-time'> {props.time} </div>
          <div className='appointment-card-name'>
            {' '}
            {props.first_name} {props.last_name}{' '}
          </div>
          <div className='appointment-card-markAs'>{props.visited}</div>
        </div>
        <div className='appointment-card-visitedButton'>{beenVisited()}</div>
      </div>

      <div className='appointment-card-rightStyling'></div>
    </div>
  );
}

export default AppointmentCard;
