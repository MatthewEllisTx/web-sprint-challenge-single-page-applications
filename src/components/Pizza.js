import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

import FieldBulider from './FieldBuilder';
import schema from '../Schema/form_schema';

const initialValues = {
  size: '',
  sauce: '',
  'gluten-free': false,
  instructions: '',
  quantity: 1,

  'pepperoni': false,
  'sausage': false,
  'canadian-bacon': false,
  'spicy-italian-sausage': false,
  'grilled-chicken': false,
  'onions': false,
  'green-peper': false,
  'diced-tomatoes': false,
  'black-olives': false,
  'roasted-garlic': false,
  'artichoke-hearts': false,
  'three-cheese': false,
  'pinapple': false,
  'extra-cheese': false
}

const toppings = [
  'pepperoni',
  'sausage',
  'canadian-bacon',
  'spicy-italian-sausage',
  'grilled-chicken',
  'onions',
  'green-peper',
  'diced-tomatoes',
  'black-olives',
  'roasted-garlic',
  'artichoke-hearts',
  'three-cheese',
  'pinapple',
  'extra-cheese',
]

const fields = [
  {
    type: 'select',
    title: 'Choose Size',
    description: 'Required',
    name: 'size',
    options: [
      {value: '', description: 'Select Size'},
      {value: 'small', description: 'Small'},
      {value: 'medium', description: 'Medium'},
      {value: 'large', description: 'Large'},
    ]
  },
  {
    type: 'radio',
    title: 'Choose Sauce',
    description: 'Required',
    name: 'sauce',
    options: [
      'original-red',
      'garlic-ranch',
      'bbq-sauce',
      'spinach-alfredo',
    ]
  },
  {
    type: 'checkbox',
    title: 'Choose Toppings',
    description: 'Choose up to 10',
    options: [
      'pepperoni',
      'sausage',
      'canadian-bacon',
      'spicy-italian-sausage',
      'grilled-chicken',
      'onions',
      'green-peper',
      'diced-tomatoes',
      'black-olives',
      'roasted-garlic',
      'artichoke-hearts',
      'three-cheese',
      'pinapple',
      'extra-cheese',
    ]
  },
  {
    type: 'checkbox',
    title: 'Gluten Free',
    description: 'Optional',
    options: [
      'gluten-free',
    ]
  },
]

export default function Pizza(){
  const [ values, setValues ] = useState(initialValues);
  const [ disabled, setDisabled ] = useState(true);

  async function validateParam(name, value){
    let test;
    try {
      test = await yup.reach(schema, name).validate(value)
    } catch (e) {
      test = e;
    }

    return test == value ? true : false;
  }

  async function onChange(evt){

    console.log(evt.target);
    const { name, type } = evt.target;
    const value = type === 'checkbox' ? evt.target.checked : evt.target.value;

    let valueToTest;
    let nameToTest;
    if(toppings.indexOf(name) === -1){
      valueToTest = type === 'checkbox' ? evt.target.checked : evt.target.value;
      nameToTest = name;
    } else {
      valueToTest = Object.entries(values).filter( keyPair => {
        
        if(toppings.indexOf(keyPair[0]) !== -1){
          if(keyPair[1] === true || keyPair[0] === name){
            const key = keyPair[0];
            return keyPair[0];
          }
        }
      })
      nameToTest = 'toppings';
    }

    const set = await validateParam(nameToTest, valueToTest);
    if(set)
      setValues({ ...values, [name]: value})
  }

  function onSubmit(evt){
    evt.preventDefault();
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <form>
        
        {fields.map( field => <FieldBulider key={field.title} fieldData={field} values={values} onChange={onChange}/>)}
        
        <label>
          <h3>Quantity</h3>
          <input type='number' min='1' name='quantity' value={values.quantity} onChange={onChange}/>
        </label>
        
        <label>
          <h3>Anything you'd like to add?</h3>
          <p>Optional</p>
          <input type='text' name='instructions' value={values.instructions} placeholder='Start typing here...' maxLength='280' onChange={onChange}/>
        </label>

        <div>
          <button type='submit' disabled={disabled}>
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}