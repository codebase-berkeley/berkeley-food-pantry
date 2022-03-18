import React from 'react'
import './Tags.css'


function Tags(props) {
    return (
        <div className="foodComponentTag"> 
            {props.name}
        </div>
    );
}

export default Tags
