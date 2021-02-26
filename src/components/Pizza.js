import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import FieldBulider from './FieldBuilder';

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

  function onChange(evt){
    console.log(evt.target);
    const { name, type } = evt.target;
    const value = type === 'checkbox' ? evt.target.checked : evt.target.value;
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
          <h3>Anything you'd like to add?</h3>
          <p>Optional</p>
          <input type='text' name='instructions' value={values.instructions} placeholder='Start typing here...' onChange={onChange}/>
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