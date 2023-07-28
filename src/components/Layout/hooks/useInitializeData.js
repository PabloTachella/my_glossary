import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fbCheckAutentication } from "../../../services/fbAuth"
import { getGlossaryByLanguage } from "../../../store/slices/glossary"

export const useInitialiceData = () => {
  const dispatch = useDispatch()
  const { uid, statusUser } = useSelector(state => state.user)
  const { language, glossaryData, status } = useSelector(state => state.glossary)
  
  fbCheckAutentication()
  
  useEffect(() => {
    if (language && !glossaryData[language] && statusUser === 'succeeded') {
      dispatch(getGlossaryByLanguage({ uid, language }))
    }
  }, [language, statusUser])

  return { status, statusUser }
}