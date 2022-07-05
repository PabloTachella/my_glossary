import React from "react"
import './Input.css'

const Input = ({ type, name, value, handleChange, handleBlur, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className='b-input'
    />
  )
}

export default Input