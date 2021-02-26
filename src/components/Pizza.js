import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const initialValues = {
  size: '',
  sauce: '',
  toppings: [],
  subsitute: false,
  instructions: '',
  quantity: 1
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
      </form>
    </div>
  )
}