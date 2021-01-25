import React from 'react';

const InputText = ({ name, maxLength, value, onChange, children }) => (
  <label htmlFor={ name }>
    { children }
    <input
      id={ name }
      type="text"
      name={ name }
      maxLength= { maxLength }
      value= { value }
      required
      onChange = { onChange }
    />
  </label>
);

export default InputText;
