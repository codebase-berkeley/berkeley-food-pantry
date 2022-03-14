import React from 'react'

function Food(props) {
    if (props.in_stock) {
        return(
            <div>
                <h1>{props.name}</h1>
                <div>
                    {props.image}
                    {props.tags}
                </div>
            </div>
        );
    }
}

export default Food