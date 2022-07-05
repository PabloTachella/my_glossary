import React from "react";
import './SelectDropdown.css'

const SelectDropdown = ({ onChange, options, defaultValue }) => {

  const handleChange = ev => onChange(ev.target.value)

  return (
    <select
      onChange={handleChange}
      className="b-select--dropdown"
      defaultValue={defaultValue || options[0]}>
      {options.map((option, index) => {
        return (<option key={index} value={option}>{option}</option>)
      })}
    </select>
  )
}

export default SelectDropdown