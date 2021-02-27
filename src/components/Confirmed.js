import React from 'react';
import { Link } from 'react-router-dom';

export default function Confirmed(){

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>
        Thank you, your pizza is on the way
      </h1>
    </div>
  )
}