import { useDispatch, useSelector } from "react-redux";

import { setLanguage } from "../store/slices/glossary";

export const useInitialData = () => {
  const dispatch = useDispatch()
  // const { email } = useSelector(state => state.user)
  const { language, glossaryData } = useSelector(state => state.glossary)

  const LANGUAGES = [
    'Alemán',
    'Árabe',
    'Bengalí',
    'Chino mandarín',
    'Coreano',
    'Español',
    'Francés',
    'Guaraní',
    'Hindi',
    'Indonesio',
    'Inglés',
    'Italiano',
    'Japonés',
    'Portugués',
    'Ruso',
    'Tailandés',
    'Turco',
    'Urdu',
    'Vietnamita'
  ]

  const changeOfLanguage = language => {
    dispatch(setLanguage({ language }))
  }

  // if (language && !glossaryData[language]) {
  //   dispatch(getGlossaryByLanguage({ email, language }))
  // }

  return {
    LANGUAGES,
    changeOfLanguage,
    glossaryData,
    language,
  }
}