import React from 'react'

import ButtonPrimary from '../ButtonPrimary/ButtonPrimary'
import Input from '../Input/Input'
import './LoginForm.css'

const LoginForm = ({ error, value, touched, handleChange, handleBlur, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit} className="b-login-form--container">
      <div className="b-login-form--input-container">
        <Input
          type="email"
          name="email"
          value={value}
          handleChange={handleChange}
          handleBlur={handleBlur}
          placeholder="Ingrese su email"
        />
      </div>
      {error && touched && <span className="b-login-form--input">{error}</span>}
      <ButtonPrimary
        text='Iniciar sesión'
        handleDisabled={false}
        className="b-login-form--button-container"
      />
    </form>
  )
}

export default LoginForm