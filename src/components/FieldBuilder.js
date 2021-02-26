import React from 'react';

export default function FieldBulider({fieldData, values, onChange}){
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