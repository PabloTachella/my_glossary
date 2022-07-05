import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { useFormLogin } from "../../../hooks/useFormLogin"
import LoginForm from "../../LoginForm/LoginForm";
import './Login.css'

const Login = () => {
  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched,
    error,
    statusSendMail
  } = useFormLogin()

  return (
    <section className="b-login--container">
      <h1 className="b-login--title">My Glossary App</h1>
      <h2 className="b-login--subtitle">
        Ingresa un email para poder iniciar sesión, no es necesario estar previamente registrado
      </h2>
      <LoginForm
        error={errors.email}
        value={values.email}
        touched={touched.email}
        handleChange={handleChange}
        handleBlur={handleBlur}
        handleSubmit={handleSubmit}
      />
      {statusSendMail === 'loading' ?
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
        :
        statusSendMail === 'succeeded' ?
          <span className="b-login--message">
            Se ha enviado un mail a su correo con un link de acceso, para finalizar el 
            inicio de sesión. Si no puede visualizarlo <b>revise la carpeta de spam</b>
          </span>
          : statusSendMail === 'failed' &&
          <span>{error}</span>
      }
    </section>
  )
}

export default Login