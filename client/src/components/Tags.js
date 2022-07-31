import React from 'react'
import './Tags.css'


function Tags(props) {

let colorMatches = {vegetarian: "#7EB09B", vegan: "#519E8A", pescatarian: "#C791AB", 'gluten-free': "#EBA191", fruit:"#EC8F67", vegetable: "#B1BA69", grains: "#CEA07E", dairy: "#F0BB54", seafood: "#44A1AE", meat: '#EF8275'}
    if (props.name !== "") {
        return (
        <div className="foodComponentTag" style={{backgroundColor: colorMatches[props.name.toLowerCase()]}}> 
            {props.name}
        </div>
    );
        } else return null;
}

export default Tags;
