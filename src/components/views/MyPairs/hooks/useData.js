import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setList, setListToRender } from "../../../../store/slices/my-pairs"

export const useData = () => {
  const dispatch = useDispatch()
  const { uid } = useSelector(state => state.user)
  const { statusSaveChanges, language, glossaryData } = useSelector(state => state.glossary)
  const { filter, list, listToRender } = useSelector(state => state.myPairs)

  useEffect(() => {
    if (glossaryData[language]?.length > 0) dispatch(setList({ data: glossaryData[language] }))
  }, [glossaryData])

  useEffect(() => {
    if (list?.length > 0 && filter) {
      dispatch(setListToRender())
    }
  }, [list, filter])

  return {
    uid,
    statusSaveChanges,
    language,
    listToRender
  }
}