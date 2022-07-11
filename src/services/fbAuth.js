import {
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAuthentication } from "../store/slices/user";

import { auth } from "./fbConfig";

const REDIRECT_URL = process.env.REDIRECT_URL

export async function fbLoginUserWithLink(email) {
  const actionCodeSettings = {
    url: REDIRECT_URL,
    handleCodeInApp: true
  }

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)

    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    window.localStorage.setItem('emailForSignIn', email)
  } catch (e) {
    return new Error(e)
  }
}

export async function fbAuthenticateUser(email) {

  // Confirm the link is a sign-in with email link.
  if (isSignInWithEmailLink(auth, window.location.href)) {
    try {
      const result = await signInWithEmailLink(auth, email, window.location.href)
      return result.user.uid
    } catch (error) {
      return new Error(error)
    }
  } else {
    return new Error('No se ha accedido desde un Link provisto vía email')
  }
}

export async function fbCheckAutentication() {
  const dispatch = useDispatch()

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthentication({ email: user.email, uid: user.uid, statusUser: 'succeeded' }))
      } else {
        dispatch(setAuthentication({ email: '', statusUser: 'idle', uid: null }))
      }
    })

    return unSub
  }, [])
}

export async function fbLogout() {
  try {
    await signOut(auth)
  } catch (e) {
    return new Error(e)
  }
}
