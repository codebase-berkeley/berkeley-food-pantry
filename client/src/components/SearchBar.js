import React from 'react';




// import isbeesSearchBar from './../images/IsbeesSearchIcon.svg';
function SearchBar(props) {
  
  function hideIcon(self) {
    self.style.backgroundImage = 'none';
  }
  
  return (
    <div className = "search">
        <div className = "searchInputs">
            <input 
            value = {props.searchInput}
            onInput = {e => props.setSearchInput(e.target.value)}
            type = "text" 
            onchange = "hideIcon(this);" 
            placeholder = {props.placeholder}/>
        </div>
        <div className = "dataResults">
        </div>
    </div>
  )
}

export default SearchBar;
