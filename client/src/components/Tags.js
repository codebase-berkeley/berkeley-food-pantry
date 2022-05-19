import React from 'react'
import './Tags.css'


function Tags(props) {
    if (props.name !== "") {
        return (
        <div className="foodComponentTag"> 
            {props.name}
        </div>
    );
        } else return null;
}

export default Tags;
