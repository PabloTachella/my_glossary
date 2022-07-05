import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { authenticateUser, setEmail } from "../../../../store/slices/user"
import { initialValues, validate } from "../../../../hooks/useFormLogin"
import { useFormik } from "formik"

export const useAuthentication = () => {
  const navegate = useNavigate()
  const dispatch = useDispatch()
  const { statusUser, email, error } = useSelector(state => state.user)

  let emailForSignIn = window.localStorage.getItem('emailForSignIn') || null

  useEffect(() => {
    if (email) dispatch(authenticateUser(email))
    else if (emailForSignIn) dispatch(setEmail({ email: emailForSignIn }))
  }, [email])

  const onSubmit = () => {
    dispatch(setEmail({ email: values.email }))
  }

  if (statusUser === 'succeeded') navegate('/')

  const formik = useFormik({ initialValues, validate, onSubmit })
  const { handleSubmit, handleChange, errors, values, handleBlur, touched } = formik

  return {
    status: statusUser,
    email,
    error,
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    values,
    errors
  }
}