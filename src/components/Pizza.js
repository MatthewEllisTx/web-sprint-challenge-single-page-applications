import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
  size: '',
  sauce: '',
  'gluten-free': false,
  instructions: '',
  quantity: 1,

  pepperoni: false,
  sausage: false,
  'canadian-bacon': false,
  'spicy-italian-sausage': false,
  'grilled-chicken': false,
  onions: false,
  'green-peper': false,
  'diced-tomatoes': false,
  'black-olives': false,
  'roasted-garlic': false,
  'artichoke-hearts': false,
  'three-cheese': false,
  pinapple: false,
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
      {value: 'original-red', description: 'Original Red'},
      {value: 'garlic-ranch', description: 'Garlic Ranch'},
      {value: 'bbq-sauce', description: 'BBQ Sauce'},
      {value: 'spinach-alfredo', description: 'Spinach Alfredo'},
    ]
  },

]

function FieldBulider({fieldData, values, onChange}){
  console.log(fieldData, values, onChange)

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
            <label>
              <input type='radio' name={fieldData.name} value={option.value} checked={option.value === values[fieldData.name]} onChange={onChange}/>
              {option.description}
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

        <label>
          <h3>Choose Size</h3>
          <p>Required</p>
          <select value={values.size} name='size' onChange={onChange}>
            <option value=''>Select Size</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>

        <label>
          <h3>Choose Sauce</h3>
          <p>Required</p>
          <label>
            <input type="radio" name="sauce" value="original-red" checked={values.sauce === 'original-red'} onChange={onChange}/>
            Original Red
          </label>
          <label>
            <input type="radio" name="sauce" value="garlic-ranch" checked={values.sauce === 'garlic-ranch'} onChange={onChange}/>
            Garlic Ranch
          </label>
          <label>
            <input type="radio" name="sauce" value="bbq-sauce" checked={values.sauce === 'bbq-sauce'} onChange={onChange}/>
            BBQ Sauce
          </label>
          <label>
            <input type="radio" name="sauce" value="spinach-alfredo" checked={values.sauce === 'spinach-alfredo'} onChange={onChange}/>
            Spinach Alfredo
          </label>
        </label>

        <label>
          <h3>Add Toppings</h3>
          <p>Choose up to 10</p>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
          <label> 
            <input type='checkbox' name='' onChange={onChange}/>
            
          </label>
        </label>
      </form>
    </div>
  )
}