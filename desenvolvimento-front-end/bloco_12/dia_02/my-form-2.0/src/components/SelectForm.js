import React from 'react';

const SelectForm = ({ name, maxLength, value, onChange, children }) => (
  <label htmlFor={ name }>
    Estados: 
    <select
      id={ name }
      name={ name }
      value= { value }
      required
      onChange = { onChange }
    >
      {children.map((value, key) => <option key={key}>{value}</option>)}
    </select>
  </label>
);

export default SelectForm;
