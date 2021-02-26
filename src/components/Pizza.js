import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  }
]

function FieldBulider({fieldData, values, onChange}){
  console.log(fieldData, values, onChange)

  function upperCaseRemoveDash(string){
    return string.split('-').reduce( (accumlator, currentValue) => accumlator + currentValue.charAt(0).toUpperCase() + currentValue.slice(1) + ' ', '')
  }

  function Select(){
    return (
      <select value={values[fieldData.name]} name={fieldData.name} onChange={onChange}>
        {fieldData.options.map( option => {
          return <option key={option.value} value={option.value}>{option.description}</option>
        })}
      </select>
    )
  }

  function Radio(){
    return (
      <div>
        {fieldData.options.map( option => {
          return (
            <label key={option}>
              <input type='radio' name={fieldData.name} value={option} checked={option === values[fieldData.name]} onChange={onChange}/>
              {upperCaseRemoveDash(option)}
            </label>
          )
        })}
      </div>
    )
  }

  function Checkbox(){
    return(
      <div>
        {fieldData.options.map( option => {
          return (
            <label key={option}>
              <input type='checkbox' name={option} checked={values[option]} onChange={onChange}/>
              {upperCaseRemoveDash(option)}
            </label>
          )
        })}
      </div>
    )
  }

  return (
    <label key={fieldData.title}>
      <h3>{fieldData.title}</h3>
      <p>{fieldData.description}</p>
      {fieldData.type === 'select' && <Select />}
      {fieldData.type === 'radio' && <Radio />}
      {fieldData.type === 'checkbox' && <Checkbox />}
    </label>
  )
}

export default function Pizza(){
  const [ values, setValues ] = useState(initialValues);
  const [ disabled, setDisabled ] = useState(true);

  function onChange(evt){
    console.log(evt.target);
    const { name, type } = evt.target;
    const value = type === 'checkbox' ? evt.target.checked : evt.target.value;
    setValues({ ...values, [name]: value})
  }

  return (
    <div>
      <Link to='/'>Home</Link>
      <form>
        {fields.map( field => <FieldBulider key={field.title} fieldData={field} values={values} onChange={onChange}/>)}
      </form>
    </div>
  )
}