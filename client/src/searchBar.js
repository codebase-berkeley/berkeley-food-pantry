import React from 'react';
import isbeesSearchBar from './images/IsbeesSearchIcon.svg';
function searchBar({placeholder, data}) {
  function hideIcon(self) {
    self.style.backgroundImage = 'none';
  }
  return (
    <div className = "search">
        <div className = "searchInputs">
            <input type = "text" onchange = "hideIcon(this);" placeholder = {placeholder}/>
        </div>
        <div className = "dataResults">

        </div>

    </div>
  )
}

export default searchBar