import React from 'react';

const InputRadio = ({ name, value, checked, onChange, children }) => (
  <label htmlFor={ name }>
    <input
      id={ name }
      type="radio"
      name={ name }
      value= { value }
      checked = { checked }
      onChange = { onChange }
    />
    { children }
  </label>
);

export default InputRadio;
