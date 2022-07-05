import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fbCheckAutentication } from "../../../services/fbAuth"
import { getGlossaryByLanguage } from "../../../store/slices/glossary"

export const useInitialiceData = () => {
  const dispatch = useDispatch()
  const { email, statusUser } = useSelector(state => state.user)
  const { language, glossaryData, status } = useSelector(state => state.glossary)
  
  fbCheckAutentication()
  
  useEffect(() => {
    if (language && !glossaryData[language] && statusUser === 'succeeded') {
      dispatch(getGlossaryByLanguage({ email, language }))
    }
  }, [language, statusUser])

  return { status, statusUser }
}