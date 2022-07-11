import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getListToPractice, setListToPractice, setListToPracticeFiltered } from "../store/slices/practice"
import { defaultGlossary } from "../utils/defaultGlossary"

export const useData = () => {
  const dispatch = useDispatch()
  const { uid } = useSelector(state => state.user)
  const { language } = useSelector(state => state.glossary)
  const { filter, list} = useSelector(state => state.myPairs)
  const { listToPractice } = useSelector(state => state.practice)

  // useEffect(() => {
  //   if (list?.length > 0 && filter) {
  //     dispatch(setListToRender())
  //     const date = Date.now()
  //     dispatch(setListToPractice(list.filter(el => el.repracticeDate <= date)))
  //   }
  // }, [list, filter])

  useEffect(() => {
    // Solo se ejecutará cuando el usuario acceda al modo prueba
    if (!uid && !list?.length > 0) dispatch(setListToPractice(defaultGlossary))
  }, [])

  useEffect(() => {
    dispatch(setListToPracticeFiltered({ filter }))
  }, [filter, listToPractice])

  useEffect(() => {
    // obtiene solo la lista de sentencias a practicar
    if (uid && language) dispatch(getListToPractice({ uid, language }))
  }, [language, uid])
}