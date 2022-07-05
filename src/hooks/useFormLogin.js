import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fbCheckAutentication } from "../services/fbAuth";

import { loginUser } from "../store/slices/user";

export const initialValues = { email: '' }

export const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = '*Requerido';
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = '*Ingrese un email valido';
  }
  return errors
}

export const useFormLogin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { statusSendMail, error } = useSelector(state => state.user)
  const { email, statusUser } = useSelector(state => state.user)

  fbCheckAutentication()

  if (email && statusUser === 'succeeded') navigate('/')

  const onSubmit = () => {
    dispatch(loginUser(values.email))
  }

  const formik = useFormik({ initialValues, validate, onSubmit })
  const { handleSubmit, handleChange, errors, values, handleBlur, touched } = formik

  return {
    handleSubmit,
    handleChange,
    errors,
    values,
    handleBlur,
    touched,
    error,
    statusSendMail
  }
}