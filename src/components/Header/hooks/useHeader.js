import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { resetPractice } from "../../../store/slices/practice"
import { logoutUser } from "../../../store/slices/user"

export const useHeader = () => {
  const dispatch = useDispatch()

  const logout = () => {
    dispatch(logoutUser())
    dispatch(resetPractice())
  }

  const [open, setOpen] = useState(window.innerWidth >= 576)
  const buttonRef = useRef()

  useEffect(() => {
    const closeNav = () => {
      if (window.innerWidth <= 576 && open) {
        setOpen(prev => !prev)
      }
    }

    document.addEventListener('click', closeNav)
    return () => document.removeEventListener('click', closeNav)
  }, [open])

  useEffect(() => {
    function appearNavbar() {
      if (!open) {
        const screenWidth = window.screen.width
        if (screenWidth > 576) {
          setOpen(true)
        }
      }
    }

    window.addEventListener('resize', appearNavbar)
    return () => window.removeEventListener('resize', appearNavbar)
  }, [open])

  const handleOpen = () => {
    if (!open) setOpen(prev => !prev)
  }

  return { logout, open, handleOpen, buttonRef }
}