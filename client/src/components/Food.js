import React from 'react';
import './Food.css';
import Tags from './Tags.js';
import pen from './../images/pen.svg';
import checkmark from './../images/instockMark.svg';
import xmark from '../images/notinstock.svg';
import defaultImg from '../images/default-placeholder.png';
import { BrowserRouter as Link } from 'react-router-dom';

function Food(props) {
  function stockOption() {
    if (props.in_stock == true) {
      return (
        <div className='food-editIn'>
          <img src={checkmark} className='food-stockImage' alt='checkmark' />
          <div className='food-in-stock-text'>
            <span>In Stock Today</span>
          </div>
        </div>
      );
    }
    return (
      <div className='food-editIn'>
        <img src={xmark} className='food-stockImage' alt='checkmark' />
        <div className='food-out-of-stock-text'>
          <span>Not In Stock Today</span>
        </div>
      </div>
    );
  }

  if (props.admin == true) {
    return (
      <div
        className='food-componentContainer'
        style={{ borderColor: props.in_stock == true ? '#588157' : '#BBBBBB' }}
      >
        <img
          src={props.image == '' ? defaultImg : props.image}
          class='food-foodImage'
          alt={props.name}
        />
        <div className='food-infoContainer'>
          <div className='food-nameTags'>
            <div className='food-foodName'>{props.name}</div>
            <div className='food-tagsFormat'>
              {props.tags.map((tag) => {
                return <Tags name={tag} />;
              })}
            </div>
          </div>

          <div className='food-editIn'>
            <Link
              to='/add-food'
              state={{
                name: props.name,
                tags: props.tags,
                inStock: props.in_stock,
                image: props.image,
                id: props.id,
                image_name: props.image_name,
              }}
              className='food-editButton'
            >
              <img src={pen} className='penFormat' alt='pen' />
              <div className='food-editItem'>Edit Item</div>
            </Link>
            <div className='food-inStockCheck'>
              In Stock
              <input
                className='form-check-input'
                type='checkbox'
                checked={props.in_stock}
                onChange={() => props.changeStockCheck(props.id)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className='food-componentContainer'
        style={{ borderColor: props.in_stock == true ? '#588157' : '#BBBBBB' }}
      >
        <div className='food-imgdiv'>
          <img
            src={props.image == '' ? defaultImg : props.image}
            class='food-foodImage'
            alt={props.name}
          />
        </div>

        <div className='food-infoContainer'>
          <div className='food-nameTags'>
            <div className='food-foodName'>{props.name}</div>
            <div className='food-tagsFormat'>
              {props.tags.map((tag) => {
                return <Tags name={tag} />;
              })}
            </div>
          </div>
          {stockOption()}
        </div>

        <div
          className={
            props.in_stock ? 'food-colorblock-green' : 'food-colorblock-grey'
          }
        ></div>
      </div>
    );
  }
}

export default Food;
