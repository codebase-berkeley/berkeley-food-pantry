import React from 'react'
import './Food.css'
import Tags from './Tags.js'

function Food(props) {
    if (props.in_stock) {
        const temp = props.tags.length
        for (let i = 0; i < temp; i++) {
            props.tags[i]
        }
        return(
            <div className = "componentContainer">
                <img src={props.image} class="foodImage" alt="apple" />
                
                
                
                <Tags names={props.tags} />

            </div>
        );
    }
}

export default Food