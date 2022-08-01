import './AppointmentScheduler.css';
import React, { useState } from 'react';
import Select, { NonceProvider } from 'react-select';
import makeAnimated from 'react-select/animated';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import AdminLoginNavbar from './AdminLoginNavbar';

const times = [
  { value: '2:00', label: '2:00 PM' },
  { value: '2:30', label: '2:30 PM' },
  { value: '3:00', label: '3:00 PM' },
  { value: '3:30', label: '3:30 PM' },
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
    backgroundColor: state.isFocused ? '#E5E5E5' : 'white',
    color: state.isFocused ? '#464646' : '#464646',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#ACB9AC',
  }),

  IndicatorSeparator: () => null,

  control: (provided, state) => ({
    height: '6vh',
    ...provided,
    width: '33vw',
    borderRadius: '10px',

    border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
    boxShadow: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
    '&:hover': {
      border: state.isFocused ? '1px solid #ACB9AC' : '1px solid #ACB9AC',
    },
  }),

  multiValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return {
      ...provided,
      opacity,
      transition,
      borderRadius: '20px',
      paddingLeft: '5px',
      paddingRight: '5px',
    };
  },
};

export default function AppointmentScheduler() {
  const [inputText, clearInputFields] = useState('');
  const [checkBoxInput, clearCheckBox] = useState(true);
  const [dropDownSelection, clearDropDown] = useState(0);
  const [selectedDate, setSelectedDate] = useState([]);
  const [selectedTime, setSelectedTime] = useState([]);

  function getMondayOfCurrentWeek() {
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    // const tuesday = new Date(today.setDate(first + 1));
    // console.log(tuesday); // 👉️ Tue Jan 18 2022

    const monday = new Date(today.setDate(first));

    return monday;
  }

  var today = new Date();
  console.log(today);
  const first = today.getDate() - today.getDay() + 1;

  const monday = new Date(today.setDate(first));
  today = new Date();
  const wednesday = new Date(today.setDate(first + 2));
  today = new Date();
  const friday = new Date(today.setDate(first + 4));
  today = new Date();
  const monday2 = new Date(today.setDate(first + 7));
  today = new Date();
  const wednesday2 = new Date(today.setDate(first + 9));
  today = new Date();
  const friday2 = new Date(today.setDate(first + 11));

  const dates = [
    { value: monday, label: monday.toDateString() },
    { value: wednesday, label: wednesday.toDateString() },
    { value: friday, label: friday.toDateString() },
    { value: monday2, label: monday2.toDateString() },
    { value: wednesday2, label: wednesday2.toDateString() },
    { value: friday2, label: friday2.toDateString() },
  ];

  function clearInputFieldsHelper() {
    for (var i = 1; i <= 5; i++) {
      var checkString = 'input-values-' + i;
      if (document.getElementById(checkString).value != '') {
        document.getElementById(checkString).value = '';
      }
    }

    for (var i = 1; i <= 21; i++) {
      var checkBox = 'checkbox-' + i;
      if ((document.getElementById(checkBox).checked = true)) {
        document.getElementById(checkBox).checked = false;
      }
    }

    setSelectedDate([]);
    setSelectedTime([]);
  }

  async function submitForm() {
    let dietaryPrefs = '';
    for (var i = 16; i <= 21; i++) {
      var checkString = 'checkbox-' + i;
      if (document.getElementById(checkString).checked == true) {
        dietaryPrefs += ', ' + document.getElementById(checkString).value;
      }
    }
    dietaryPrefs = dietaryPrefs.substring(2, dietaryPrefs.length);

    let itemPrefs = '';
    for (var i = 1; i <= 15; i++) {
      var checkString = 'checkbox-' + i;
      if (document.getElementById(checkString).checked == true) {
        itemPrefs += ', ' + document.getElementById(checkString).value;
      }
    }
    itemPrefs = itemPrefs.substring(2, itemPrefs.length);

    axios.post('http://localhost:4000/appointment', {
      last_name: document.getElementById('input-values-2').value,
      first_name: document.getElementById('input-values-1').value,
      date: selectedDate.label,
      time: selectedTime.label,
      email: document.getElementById('input-values-3').value,
      phone_number: document.getElementById('input-values-4').value,
      visited: false,
      dietary_preferences: dietaryPrefs,
      item_preferences: itemPrefs,
      notes: document.getElementById('input-values-5').value,
    });
  }

  return (
    <>
      <AdminLoginNavbar isAdmin={false} />
      <div>
        <div className='apptsched-intro-text-container'>
          <h1 className='apptsched-intro-text'>
            Welcome to the Berkeley Food Pantry!
            <span class='apptsched-intro-text-pt2'>
              <br></br>Please fill out the following form to schedule an
              appointment.
            </span>
          </h1>
        </div>
        <div className='apptsched-main-appointment-scheduler-container'>
          <div className='apptsched-main-appointment-scheduler-left'>
            <h1 className='apptsched-step-heading'>
              Step 1: Choose your appointment time.
            </h1>
            <div className='apptsched-scheduler-filters'>
              <div className='apptsched-dropdown'>
                <p id='apptsched-input-field-label'>
                  Pick a date for your appointment*
                </p>
                <div className='apptsched-filter-dropdown'>
                  <Select
                    className='apptsched-custom-dropdown-1'
                    styles={customStyles}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    placeholder='Select date...'
                    options={dates}
                    onChange={setSelectedDate}
                    value={selectedDate}
                  />
                </div>
              </div>
              <div className='apptsched-dropdown'>
                <p id='apptsched-input-field-label'>
                  Pick a time for your appointment*
                </p>
                <div className='apptsched-filter-dropdown'>
                  <Select
                    className='apptsched-custom-dropdown'
                    styles={customStyles}
                    closeMenuOnSelect={true}
                    components={animatedComponents}
                    placeholder='Select time...'
                    options={times}
                    onChange={setSelectedTime}
                    value={selectedTime}
                  />
                </div>
              </div>
              <p id='apptsched-input-field-label'>
                Which of these items would you prefer, if available?
              </p>
              <div className='apptsched-left-checklist-container'>
                <div className='apptsched-pickup-items'>
                  <p id='apptsched-item-checklist-label'>Vegetables & Fruit</p>
                  <div className='apptsched-pickup-items-selection'>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-1'
                          value='kale'
                        ></input>
                        Kale
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-2'
                          value='tomatoes'
                          unchecked
                        ></input>
                        Tomatoes
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-3'
                          value='apples'
                          unchecked
                        ></input>
                        Apples
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-4'
                          value='dragon fruit'
                          unchecked
                        ></input>
                        Dragon Fruit
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-5'
                          value='carrot'
                          unchecked
                        ></input>
                        Carrot
                      </label>
                    </div>
                  </div>
                </div>
                <div className='apptsched-pickup-items'>
                  <p id='apptsched-item-checklist-label'>Meat</p>
                  <div className='apptsched-pickup-items-selection'>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-6'
                          value='tuna'
                          unchecked
                        ></input>
                        Tuna
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-7'
                          value='salmon'
                          unchecked
                        ></input>
                        Salmon
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-8'
                          value='ground beef'
                          unchecked
                        ></input>
                        Ground Beef
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-9'
                          value='bacon'
                          unchecked
                        ></input>
                        Bacon
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-10'
                          value='other meat?'
                          unchecked
                        ></input>
                        Other meat?
                      </label>
                    </div>
                  </div>
                </div>
                <div className='apptsched-pickup-items'>
                  <p id='apptsched-item-checklist-label'>Non-Perishables</p>
                  <div className='apptsched-pickup-items-selection'>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-11'
                          value='canned fruit'
                          unchecked
                        ></input>
                        Canned Fruit
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-12'
                          value='cannced corn'
                          unchecked
                        ></input>
                        Canned Corn
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-13'
                          value='pasta'
                          unchecked
                        ></input>
                        Pasta
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-14'
                          value='instant jello'
                          unchecked
                        ></input>
                        Instant Jello
                      </label>
                    </div>
                    <div className='apptsched-form-check'>
                      <label
                        class='apptsched-form-check-label'
                        for='exampleRadios1'
                      >
                        <input
                          class='apptsched-form-check-input'
                          type='checkbox'
                          name='exampleRadios'
                          id='checkbox-15'
                          value='canned vegetables'
                          unchecked
                        ></input>
                        Canned Vegetables
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='apptsched-main-appointment-scheduler-right'>
            <h1 className='apptsched-step-heading'>
              Step 2: Fill in your information.
            </h1>

            <div className='apptsched-search-inputs'>
              <div className='apptsched-input-name'>
                <div className='apptsched-text-field'>
                  <p id='apptsched-input-field-label'>First name*</p>
                  <div id='apptsched-mainContainer'>
                    <input
                      className='apptsched-name-box'
                      type='text'
                      placeholder='Jane'
                      name='name'
                      id='input-values-1'
                    />
                  </div>
                </div>

                <div className='apptsched-text-field'>
                  <p id='apptsched-input-field-label'>Last name*</p>
                  <input
                    className='apptsched-name-box'
                    type='text'
                    placeholder='Doe'
                    name='name'
                    id='input-values-2'
                  />
                </div>
              </div>
              <div className='apptsched-text-field'>
                <p id='apptsched-input-field-label'>Email*</p>
                <input
                  className='apptsched-contact-box'
                  type='text'
                  placeholder='janedoe@example.com'
                  name='name'
                  id='input-values-3'
                />
              </div>
              <div className='apptsched-text-field'>
                <p id='apptsched-input-field-label'>Phone number*</p>
                <input
                  className='apptsched-contact-box'
                  type='text'
                  placeholder='XXX-XXX-XXXX'
                  name='name'
                  id='input-values-4'
                />
              </div>
            </div>

            <div className='apptsched-pick-up-items'>
              <p id='apptsched-input-field-label'>
                Please select your dietary preferences.
              </p>
              <div className='apptsched-pickup-items-selection'>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-16'
                      value='vegetarian'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Vegetarian
                  </label>
                </div>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-17'
                      value='vegan'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Vegan
                  </label>
                </div>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-18'
                      value='gluten free'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Gluten Free
                  </label>
                </div>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-19'
                      value='pescetarian'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Pescetarian
                  </label>
                </div>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-20'
                      value='include cat food'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Include cat food
                  </label>
                </div>
                <div className='apptsched-form-check'>
                  <label
                    className='apptsched-form-check-label'
                    for='exampleRadios1'
                  >
                    <input
                      className='apptsched-form-check-input'
                      type='checkbox'
                      name='exampleRadios'
                      id='checkbox-21'
                      value='include dog food'
                      unchecked
                    ></input>
                    &nbsp;&nbsp;Include dog food
                  </label>
                </div>
              </div>
            </div>
            <div className='apptsched-additional-information-text-field'>
              <p id='apptsched-input-field-label-additional'>
                Is there anything else we should know?
              </p>
              <textarea
                className='apptsched-contact-box'
                type='text'
                name='name'
                id='input-values-5'
              />
            </div>
          </div>
        </div>
        <div className='apptsched-button-container'>
          <input
            onClick={clearInputFieldsHelper}
            className='apptsched-clear-all-button'
            type='button'
            id='btClear'
            value='Clear all'
          ></input>

          <Link
            to='/thank-you'
            state={{ date: selectedDate.label, time: selectedTime.label }}
            onClick={submitForm}
            className='apptsched-link'
            style={{ textDecoration: 'none' }}
          >
            <div className='apptsched-submit-button'> Submit</div>
          </Link>
        </div>
        <Helmet>
          <title>Schedule an Appointment</title>
        </Helmet>
      </div>
    </>
  );
}
