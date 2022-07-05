import React from "react";

import { useAuthentication } from "./hooks/useAuthentication";
import LoginForm from "../../LoginForm/LoginForm"
import "./Authentication.css"

const Authentication = () => {
  const {
    status,
    email,
    error,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors
  } = useAuthentication()

  return (
    <>
      {email && status !== 'failed' ?
        <div className="b-form-authentication--container">
          <h1>Verificando correo</h1>
        </div>
        // Caso en el que usas el Link de acceso desde 
        // un dispositivo distinto al dispositivo en el que fue creado
        : status !== 'failed' ?
          <div className="b-form-authentication--container">
            <h1 className="b-form-authentication--title">
              My Glossary App
            </h1>
            <h2 className="b-form-authentication--subtitle">
              Por favor, ingrese su mail para finalizar el inicio de sesión
            </h2>
            <LoginForm
              error={errors.email}
              value={values.email}
              touched={touched.email}
              handleChange={handleChange}
              handleBlur={handleBlur}
              handleSubmit={handleSubmit}
            />
          </div>
          : <p>{error}</p>
      }
    </>
  )
}

export default Authentication