import React, { useState, useEffect } from 'react';
import './../components/SearchBar.css';
import './ViewAppointments.css';
import 'rsuite/dist/rsuite.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select, { NonceProvider } from 'react-select';
import makeAnimated, { ValueContainer } from 'react-select/animated';
import AppointmentCard from './../components/AppointmentCard';
import Details from './../components/Details';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import AdminLoginNavbar from './AdminLoginNavbar';

const sortOptions = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
];

const showOptions = [
  { value: 'all items', label: 'All items' },
  { value: 'in stock items', label: 'In stock items only' },
  { value: 'not in stock items', label: 'Not in stock items only' },
];

const apptOptions = [
  { value: 'all', label: 'All appointments this week' },
  { value: 'three days', label: 'All appointments for three days' },
  { value: 'today', label: 'All appointments today' },
];

const timeOptions = [
  { value: 'morning', label: 'Morning' },
  { value: 'afternoon', label: 'Afternoon' },
  { value: 'evening', label: 'Evening' },
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
    backgroundColor: state.isFocused ? '#E5E5E5' : null,
    color: '#000000',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#ACB9AC',
  }),

  IndicatorSeparator: () => null,

  control: (provided, state) => ({
    ...provided,
    height: '6vh',
    width: '15vw',
    borderRadius: '.5vw',
    textOverflow: 'hidden',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    flexWrap: 'nowrap',
    border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
    boxShadow: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
    '&:hover': {
      border: state.isFocused ? '1.5px solid #ACB9AC' : '1.5px solid #ACB9AC',
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

export function ViewAppointments() {
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
  }, []);

  return (
    <>
      <AdminLoginNavbar isAdmin={true} />
      <div className='full-page'>
        <div className='stockListingPage'>
          <div className='view-appts-top-container'>
            <div className='view-appts-show-appointments'>
              <p>Show appointments for:</p>

              <div className='view-appts-show-dropdowns'>
                <div className='view-appts-by-day'>
                  <div>
                    <Select
                      className='view-appts-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={apptOptions}
                      defaultValue={apptOptions[0]}
                      // value={selectedSort}
                      // onChange={setSelectedSort}
                    />
                  </div>
                </div>
                <div className='view-appts-by-time'>
                  <div>
                    <Select
                      className='view-appts-custom-dropdown'
                      styles={customStyles}
                      closeMenuOnSelect={true}
                      components={animatedComponents}
                      options={timeOptions}
                      defaultValue={timeOptions[0]}
                      // value={selectedSort}
                      // onChange={setSelectedSort}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className='view-appts-checkboxes'>
              <div className='view-appts-form-check-label'>
                <div className='appts-checkbox-together'>
                  <span>Show Past Appointments</span>
                  <input type='checkbox' />
                </div>
              </div>

              <div className='view-appts-form-check-label'>
                <div className='appts-checkbox-together'>
                  <span>Show Appointments Marked Visited</span>
                  <input type='checkbox' />
                </div>
              </div>
            </div>
          </div>

          <div className='view-appts-bottomContainer'>
            <div className='view-appts-appt-card-display'>
              <AppointmentCard
                date='Monday, April 4 2022'
                time='8:00 AM'
                firstName='Anthony'
                lastName='Lu'
                visited={false}
              />
              <AppointmentCard
                date='Monday, April 4 2022'
                time='8:30 AM'
                firstName='Yojita'
                lastName='Sharma'
              />
              <AppointmentCard
                date='Monday, April 4 2022'
                time='9:00 AM'
                firstName='Gargi'
                lastName='Deshpande'
              />
              <AppointmentCard
                date='Monday, April 4 2022'
                time='9:30 AM'
                firstName='Mawil'
                lastName='Hasan'
              />
              <AppointmentCard
                date='Monday, April 4 2022'
                time='10:00 AM'
                firstName='Abby'
                lastName='Brooks'
              />
              <AppointmentCard
                date='Monday, April 4 2022'
                time='10:30 AM'
                firstName='Aditya'
                lastName='Bhandari'
              />
            </div>

            <div className='view-appts-appointments-detail-display'>
              <Details
                date='Monday, April 4 2022'
                time='10:00 AM'
                firstName='Abby'
                lastName='Brooks'
                email='abigail.brooks@berkeley.edu'
                phoneNumber='341-766-8021'
                dietary_data={['Vegetarian', 'Lactose-intolerant']}
                item_data={['Empanadas', 'Olive oil popcorn']}
                notes='none, thanks!'
              />
            </div>
          </div>
        </div>
        <Helmet>
          <title>View Appointments</title>
        </Helmet>
      </div>
    </>
  );
}
