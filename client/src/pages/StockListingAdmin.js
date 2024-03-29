import React, { useState, useEffect } from 'react';
import Search from './../components/SearchBar.js';
import './../components/SearchBar.css';
import './StockListingAdmin.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import isbesPlusSign from './../images/plusSign.svg';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Food from './../components/Food.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import AdminLoginNavbar from './AdminLoginNavbar.js';

const foodCategories = [
  { value: 'vegan', label: 'Vegan', color: '#519E8A' },
  { value: 'vegetarian', label: 'Vegetarian', color: '#7EB09B' },
  { value: 'pescatarian', label: 'Pescatarian', color: '#C791AB' },
  { value: 'gluten-free', label: 'Gluten-free', color: '#EBA191' },
  { value: 'fruit', label: 'Fruit', color: '#EC8F67' },
  { value: 'vegetable', label: 'Vegetable', color: '#B1BA69' },
  { value: 'grains', label: 'Grains', color: '#CEA07E' },
  { value: 'dairy', label: 'Dairy', color: '#F0BB54' },
  { value: 'seafood', label: 'Seafood', color: '#44A1AE' },
  { value: 'meat', label: 'Meat', color: '#EF8275' },
];

const sortOptions = [
  { value: 'recently added', label: 'Most Recently Added' },
  { value: 'alphabetical', label: 'Alphabetical, A-Z' },
];

const animatedComponents = makeAnimated();
const customStyles = {
  placeholder: (defaultStyles) => ({
    ...defaultStyles,
    color: '#C4C4C4',
  }),

  option: (provided, state) => ({
    ...provided,
    height: '6vh',
    backgroundColor: state.isFocused
      ? '#E5E5E5'
      : state.isSelected
      ? '#C791AB'
      : null,
    color: '#000000',
  }),

  multiValueLabel: (styles) => ({
    ...styles,
    color: '#333333',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#ACB9AC',
  }),

  IndicatorSeparator: () => null,

  control: (provided, state) => ({
    ...provided,
    width: '20vw',
    height: 'auto',
    minHeight: '6vh',
    borderRadius: '.5vw',
    textOverflow: 'hidden',
    whiteSpace: 'wrap',
    overflow: 'auto',
    flex: '1',
    flexWrap: 'wrap',
    border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
    boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
    '&:hover': {
      border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
    },

    '@media screen and (orientation: portrait)': {
      ...provided['@media screen and (orientation: portrait)'],
      width: '80vw',
      borderRadius: '8px',
    },
  }),

  multiValue: (provided, styles, state) => {
    // const opacity = state.isDisabled ? 0.5 : 1;
    //const transition = 'opacity 300ms';

    return {
      ...styles,
      ...provided,
      borderRadius: '20px',
      paddingLeft: '5px',
      paddingRight: '5px',
      backgroundColor: '#eeeeee',
    };
  },
};

export function StockListingAdmin() {
  const [currentStock, setCurrentStock] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');
  async function fetchStock() {
    const food = (await axios.get('http://localhost:4000/food')).data;

    //convert data first
    console.log(food);
    setLastUpdated(food[0].updatedAt);
    let convertedFood = food.map((f) => {
      if (lastUpdated < f.lastUpdated) {
        setLastUpdated(f.lastUpdated);
      }
      let tempTags = f.tags.split(',').map((t) => {
        return t.charAt(0).toUpperCase() + t.substring(1);
      });
      if (tempTags == '') {
        tempTags = [];
      }
      return {
        id: f.id,
        name: f.name,
        image: f.image_path,
        image_name: f.image_name,
        instock: f.instock,
        tags: tempTags,
      };
    });

    setCurrentStock(convertedFood);
  }

  const [selectedSort, setSelectedSort] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedShow, setSelectedShow] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/check_authenticated', {
        withCredentials: true,
      })
      .catch((error) => {
        if (error.response.status === 403) {
          window.location.href = '/login';
        }
      });
    fetchStock();
  }, []);

  function clearInputFieldsHelper() {
    setSelectedSort(sortOptions[0]);
    setSelectedTags([]);
    setSelectedShow(0);
    setSearchInput('');
  }

  function sortAZ(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }

  function changeStockCheck(foodId) {
    const tempCurrentStock = [...currentStock];
    for (const listing of tempCurrentStock) {
      if (listing.id === foodId) {
        listing.instock = !listing.instock;
        axios.put('http://localhost:4000/food', {
          id: listing.id,
          name: listing.name,
          instock: listing.instock,
          tags: listing.tags.join(','),
          image: listing.image,
          image_name: listing.image_name,
        });
      }
    }
    setCurrentStock(tempCurrentStock);
  }

  function tagMatchFunction(foodObject) {
    for (const tag of selectedTags.map((tagObject) => tagObject.label)) {
      if (!foodObject.tags.includes(tag)) {
        return false;
      }
    }
    return true;
  }

  function mostRecent() {
    return;
  }

  function stockFilterFunction(foodObject) {
    if (selectedShow == 0) {
      return true;
    } else if (selectedShow == 1) {
      return foodObject.instock;
    } else if (selectedShow == 2) {
      return !foodObject.instock;
    }
  }

  function setOutOfStock() {
    const tempCurrentStock = [...currentStock];
    for (const listing of tempCurrentStock) {
      listing.instock = false;
      axios.put('http://localhost:4000/food', {
        id: listing.id,
        name: listing.name,
        instock: listing.instock,
        tags: listing.tags.join(','),
        image: listing.image,
        image_name: listing.image_name,
      });
    }
    setCurrentStock(tempCurrentStock);
  }

  function getSort() {
    if (selectedSort == null) {
      return;
    } else if (selectedSort.value == 'recently added') {
      return mostRecent;
    } else if (selectedSort.value == 'alphabetical') {
      return sortAZ;
    }
  }

  function searchFunction(foodObject) {
    if (foodObject.name.toUpperCase().includes(searchInput.toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <AdminLoginNavbar isAdmin={true} />
      <div className='stocklisting-entireContent'>
        <div className='stocklisting-stockListingPage'>
          <div className='stocklisting-topContainer'>
            <div className='stocklisting-leftSide'>
              <h1>Edit Today's Stock</h1>
              <p>Manage today's stock listing.</p>
            </div>

            <div className='stocklisting-rightSide'>
              <Link
                to='/add-food'
                className='stocklisting-addButton'
                style={{ textDecoration: 'none' }}
              >
                <img src={isbesPlusSign}></img>
                <div className='stocklisting-addItem'> Add new item </div>
              </Link>
              <button
                className='stocklisting-changeStock'
                onClick={() => setOutOfStock()}
              >
                {' '}
                Set all items to out of stock{' '}
              </button>
            </div>
          </div>

          <div className='stocklisting-bottomContainer'>
            <div className='stocklisting-filterItemControls'>
              <div className='stocklisting-filterReset'>
                <div className='stocklisting-filterItems'>Filter Items</div>
                <button
                  className='stocklisting-resetFilters'
                  onClick={clearInputFieldsHelper}
                >
                  Reset Filters
                </button>
              </div>

              <div className='stocklisting-filters'>
                <div className='stocklisting-searchBox'>
                  <text>Search Items</text>
                  <Search
                    placeholder='Search...'
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                </div>

                <div className='stocklisting-filter-by'>
                  <p id='stocklisting-filterControlLabel'>
                    Filter by Dietary Categories
                  </p>
                  <div id='stocklisting-filter-dropdown'>
                    <Select
                      className='stocklisting-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      placeholder='Select...'
                      isMulti
                      options={foodCategories}
                      value={selectedTags}
                      onChange={setSelectedTags}
                    />
                  </div>
                </div>

                <div className='stocklisting-sort-by'>
                  <p id='stocklisting-filterControlLabel'>Sort By...</p>
                  <div>
                    <Select
                      className='stocklisting-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      placeholder='Alphabetical, A-Z'
                      options={sortOptions}
                      defaultValue={sortOptions[0]}
                      value={selectedSort}
                      onChange={setSelectedSort}
                    />
                  </div>
                </div>

                <div className='stocklisting-showFilter'>
                  <div className='stocklisting-howText'>
                    <p id='stocklisting-filterControlLabel'>Show</p>
                  </div>
                  <div className='stocklisting-form-check'>
                    <label
                      class='stocklisting-form-check-label'
                      for='exampleRadios1'
                    >
                      <input
                        class='form-check-input'
                        type='radio'
                        checked={selectedShow == 0}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedShow(0);
                          }
                        }}
                      ></input>
                      All items
                    </label>
                  </div>

                  <div className='stocklisting-form-check'>
                    <label
                      class='stocklisting-form-check-label'
                      for='exampleRadios1'
                    >
                      <input
                        class='form-check-input'
                        type='radio'
                        checked={selectedShow == 1}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedShow(1);
                          }
                        }}
                      ></input>
                      In stock items only
                    </label>
                  </div>

                  <div className='stocklisting-form-check'>
                    <label
                      class='stocklisting-form-check-label'
                      for='exampleRadios1'
                    >
                      <input
                        class='form-check-input'
                        type='radio'
                        checked={selectedShow == 2}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedShow(2);
                          }
                        }}
                      ></input>
                      Not in stock items only
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='stocklisting-filterItemDisplay'>
              {currentStock
                .filter(searchFunction)
                .filter(tagMatchFunction)
                .filter(stockFilterFunction)
                .sort(getSort())
                .map((foodItem) => (
                  <Food
                    id={foodItem.id}
                    name={foodItem.name}
                    image={foodItem.image}
                    image_name={foodItem.image_name}
                    in_stock={foodItem.instock}
                    tags={foodItem.tags}
                    admin={true}
                    changeStockCheck={changeStockCheck}
                  />
                ))}
            </div>
          </div>
        </div>

        <Helmet>
          <title>Edit Today's Stock</title>
        </Helmet>
      </div>
    </>
  );
}

export function StockListingUser() {
  const [selectedSort, setSelectedSort] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedShow, setSelectedShow] = useState(0);
  const [searchInput, setSearchInput] = useState('');

  const [currentStock, setCurrentStock] = useState([]);
  const [lastUpdated, setLastUpdated] = useState('');
  async function fetchStock() {
    const food = (await axios.get('http://localhost:4000/food')).data;

    //convert data first
    console.log(food);
    setLastUpdated(food[0].updatedAt);
    let convertedFood = food.map((f) => {
      if (lastUpdated < f.lastUpdated) {
        setLastUpdated(f.lastUpdated);
      }
      return {
        id: f.id,
        name: f.name,
        image: f.image_path,
        image_name: f.image_name,
        instock: f.instock,
        tags: f.tags.split(',').map((t) => {
          return t.charAt(0).toUpperCase() + t.substring(1);
        }),
      };
    });

    setCurrentStock(convertedFood);
  }

  useEffect(() => {
    fetchStock();
  }, []);

  function clearInputFieldsHelper() {
    setSelectedSort(sortOptions[0]);
    setSelectedTags([]);
    setSelectedShow(0);
    setSearchInput('');
  }

  function sortAZ(a, b) {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  }

  function tagMatchFunction(foodObject) {
    for (const tag of selectedTags.map((tagObject) => tagObject.label)) {
      if (!foodObject.tags.includes(tag)) {
        return false;
      }
    }
    return true;
  }

  function mostRecent() {
    return;
  }

  function stockFilterFunction(foodObject) {
    if (selectedShow == 0) {
      return true;
    } else if (selectedShow == 1) {
      return foodObject.instock;
    } else if (selectedShow == 2) {
      return !foodObject.instock;
    }
  }

  function getSort() {
    if (selectedSort == null) {
      return;
    } else if (selectedSort.value == 'recently added') {
      return mostRecent;
    } else if (selectedSort.value == 'alphabetical') {
      return sortAZ;
    }
  }

  function searchFunction(foodObject) {
    if (foodObject.name.toUpperCase().includes(searchInput.toUpperCase())) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <AdminLoginNavbar isAdmin={false} />

      <div className='stocklisting-entireContent'>
        <div className='stocklisting-stockListingPage'>
          <div className='stocklisting-topContainer'>
            <div className='stocklisting-leftSide'>
              <h1>Check out what we have in stock today.</h1>
              <p>
                <i>
                  Stock last updated at{' '}
                  {new Date(lastUpdated).toLocaleString('en-US', {
                    timeZone: 'America/Los_Angeles',
                    dateStyle: 'full',
                    timeStyle: 'full',
                  })}
                  .
                </i>
                <br></br>
                Stock availability varies day by day. If something you’re
                looking for is out of stock, it might be available on another
                day.
              </p>
            </div>
          </div>

          <div className='stocklisting-bottomContainer'>
            <div className='stocklisting-filterItemControls'>
              <div className='stocklisting-filterReset'>
                <div className='stocklisting-filterItems'>Filter Items</div>
                <button
                  className='stocklisting-resetFilters'
                  onClick={clearInputFieldsHelper}
                >
                  Reset Filters
                </button>
              </div>

              <div className='stocklisting-filters'>
                <div className='stocklisting-searchBox'>
                  <text>Search Items</text>
                  <Search
                    placeholder='Search...'
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                  />
                </div>

                <div className='stocklisting-filter-by'>
                  <p id='stocklisting-filterControlLabel'>
                    Filter by Dietary Categories
                  </p>
                  <div id='stocklisting-filter-dropdown'>
                    <Select
                      className='stocklisting-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      placeholder='Select...'
                      isMulti
                      options={foodCategories}
                      value={selectedTags}
                      onChange={setSelectedTags}
                    />
                  </div>
                </div>

                <div className='stocklisting-sort-by'>
                  <p id='stocklisting-filterControlLabel'>Sort By...</p>
                  <div>
                    <Select
                      className='stocklisting-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      placeholder='Alphabetical, A-Z'
                      options={sortOptions}
                      defaultValue={sortOptions[0]}
                      value={selectedSort}
                      onChange={setSelectedSort}
                    />
                  </div>
                </div>

                <div className='stocklisting-showFilter'>
                  <div className='stocklisting-form-check'>
                    <label
                      class='stocklisting-form-check-label'
                      for='exampleRadios1'
                    >
                      <input
                        class='form-check-input'
                        type='checkbox'
                        name='exampleRadios'
                        id='exampleRadios1'
                        value='option1'
                        checked={selectedShow == 1}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedShow(1);
                          } else {
                            setSelectedShow(0);
                          }
                        }}
                      ></input>
                      Only show items in stock today.
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='stocklisting-filterItemDisplay'>
              {currentStock
                .filter(searchFunction)
                .filter(tagMatchFunction)
                .filter(stockFilterFunction)
                .sort(getSort())
                .map((foodItem) => (
                  <Food
                    id={foodItem.id}
                    name={foodItem.name}
                    image={foodItem.image}
                    image_name={foodItem.image_name}
                    in_stock={foodItem.instock}
                    tags={foodItem.tags}
                  />
                ))}
            </div>
          </div>
        </div>

        <Helmet>
          <title>View Today's Stock</title>
        </Helmet>
      </div>
    </>
  );
}
