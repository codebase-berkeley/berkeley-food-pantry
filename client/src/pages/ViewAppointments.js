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

const apptOptions = [
  { value: 'all', label: 'All appointments this week' },
  { value: 'monday', label: 'All appointments on Monday' },
  { value: 'wednesday', label: 'All appointments on Wednesday' },
  { value: 'friday', label: 'All appointments on Friday' },
];
const timeOptions = [
  { value: 'all', label: 'All times this week' },
  { value: '2:00-2:30', label: '2:00 PM - 2:30 PM' },
  { value: '2:30-3:00', label: '2:30 PM - 3:00 PM' },
  { value: '3:00-3:30', label: '3:00 PM - 3:30 PM' },
  { value: '3:30-4:00', label: '3:30 PM - 4:00 PM' },
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
};

export function ViewAppointments() {
  const [selectedSort, setSelectedSort] = useState();
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedShow, setSelectedShow] = useState(0);
  const [searchInput, setSearchInput] = useState('');
  const [selectedDay, setSelectedDay] = useState('all');
  const [selectedTime, setSelectedTime] = useState('all');
  const [activeAppt, setActiveAppt] = useState();
  const [activeVisited, setActiveVisited] = useState(false);
  const [card, setCard] = useState([]);
  const [dietary, setDietary] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    const res = async () => {
      const res1 = await axios.get('http://localhost:4000/appointment');
      setCard(res1.data);
      // console.log(card);
      // 1: Make a temp constant that is card but with dietary_preferences and item_preferences
      // set to be arrays instead of strings
      // console.log("RES 1: ", res1.data)
      // console.log(card);
      setActiveAppt(res1.data[0]);
      setDietary(res1.data[0].dietary_preferences.split(','));
      setItem(res1.data[0].item_preferences.split(','));

      return res1;
    };
    res().catch(console.error);

    // console.log(res());
  }, []);

  //   async function fetchAppts() {
  //     const res1 = await axios.get('http://localhost:4000/appointment');
  //     setCard(res1.data);
  //     // console.log(card);
  //     // 1: Make a temp constant that is card but with dietary_preferences and item_preferences
  //     // set to be arrays instead of strings
  //     // console.log("RES 1: ", res1.data)
  //     // console.log(card);
  //     setActiveAppt(res1.data[0]);
  //     setDietary(res1.data[0].dietary_preferences.split(','));
  //     setItem(res1.data[0].item_preferences.split(','));

  //     return res1;
  //   }

  //   useEffect(() => {
  //     axios
  //       .get('http://localhost:4000/check_authenticated', {
  //         withCredentials: true,
  //       })
  //       .catch((error) => {
  //         if (error.response.status === 403) {
  //           window.location.href = '/login';
  //         }
  //       });
  //     fetchAppts();
  //   }, []);

  function clearInputFieldsHelper() {
    setSelectedSort();
    setSelectedTags([]);
    setSelectedShow(0);
    setSearchInput('');
  }

  function apptDayFilter(card) {
    if (selectedDay == 'all' || selectedDay.value.charAt(0) == 'a') {
      return true;
    }
    return card.date.toLowerCase().charAt(0) == selectedDay.value.charAt(0);
  }

  function apptTimeFilter(card) {
    const splitInt = card.time.split(':');
    const newSplitInt = parseInt(splitInt[0]) * 100 + parseInt(splitInt[1]);
    // console.log(splitInt);
    // console.log(newSplitInt);
    if (selectedTime == 'all' || selectedTime.value.charAt(0) == 'a') {
      return true;
    } else if (selectedTime.value == '2:00-2:30') {
      return newSplitInt >= 200 && newSplitInt <= 230;
    } else if (selectedTime.value == '2:30-3:00') {
      return newSplitInt >= 230 && newSplitInt <= 300;
    } else if (selectedTime.value == '3:00-3:30') {
      return newSplitInt >= 300 && newSplitInt <= 330;
    } else if (selectedTime.value == '3:30-4:00') {
      return newSplitInt >= 330 && newSplitInt <= 400;
    }
  }

  function setCardVisited(activeId) {
    // setActiveVisited(!activeVisited);
    // console.log("inside setcardvisited");
    // for (const each of card) {
    //     if (each.id == activeId) {
    //         // each.visited = !each.visited;
    //         // AppointmentCard.setVisited(each);
    //         break;
    //     }
    // }
  }

  function selectCard(activeId) {
    for (const each of card) {
      if (each.id == activeId) {
        console.log('EACH:', each);
        setActiveAppt(each);
        const splitDietary = each.dietary_preferences.split(',');
        const splitItem = each.item_preferences.split(',');
        setDietary(splitDietary);
        setItem(splitItem);
        break;
      }
    }
  }

  if (card.length != 0 && typeof activeAppt != 'undefined') {
    // console.log(card);
    console.log('in if', activeAppt);
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
                        value={selectedDay}
                        onChange={setSelectedDay}
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
                        value={selectedTime}
                        onChange={setSelectedTime}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='view-appts-checkboxes'>
                <div className='view-appts-form-check-label'>
                  <span> Show appointments marked visited</span>
                  <input type='checkbox' />
                </div>

                <div className='view-appts-form-check-label'>
                  <span>Show past appointments</span>
                  <input type='checkbox' />
                </div>
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

        <div className='view-appts-bottomContainer'>
          <div className='view-appts-appt-card-display'>
            {card
              .filter(apptDayFilter)
              .filter(apptTimeFilter)
              .map((filteredAppt) => (
                <AppointmentCard
                  id={filteredAppt.id}
                  date={filteredAppt.date}
                  time={filteredAppt.time}
                  first_name={filteredAppt.first_name}
                  last_name={filteredAppt.last_name}
                  visited={filteredAppt.visited}
                  email={filteredAppt.email}
                  phoneNumber={filteredAppt.phone_number}
                  dietaryData={filteredAppt.dietary_preferences}
                  itemData={filteredAppt.item_preferences}
                  notes={filteredAppt.notes}
                  onclickFunc={selectCard}
                />
              ))}
          </div>

          <div className='view-appts-appointments-detail-display'>
            <Details
              id={activeAppt.id}
              date={activeAppt.date}
              time={activeAppt.time}
              first_name={activeAppt.first_name}
              last_name={activeAppt.last_name}
              email={activeAppt.email}
              phone_number={activeAppt.phone_number}
              dietary_preferences={dietary}
              item_preferences={item}
              notes={activeAppt.notes}
              visited={activeAppt.visited}
              changeCardFunc={setCardVisited}
            />
          </div>
        </div>

        <Helmet>
          <title>View Appointments</title>
        </Helmet>
      </>
    );
  } else {
    return <div>loading</div>;
  }
}
