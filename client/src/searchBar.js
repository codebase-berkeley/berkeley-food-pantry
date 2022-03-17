import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
function searchBar({placeholder, data}) {
  return (
    <div className = "search">
        <div className = "searchInputs">
            <input type = "text" placeholder = {placeholder} />
            <div className = "searchIcon"> 
                <SearchIcon/>
            </div>
        </div>
        <div className = "dataResults">

        </div>

    </div>
  )
}

export default searchBar