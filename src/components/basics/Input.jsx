import React from 'react';
import './input.css';

const Input = ({ label, type, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input 
    type={type} 
    value={value} 
    onChange={onChange} 
    />
  </div>
);

export default Input;