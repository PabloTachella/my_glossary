import { generateRandomNum } from "../../../utils/generateRandomNumBetween"

export const calcCharsToShow = (totalChars, help) => {
  if (help === 2) return Math.ceil(totalChars * 0.25)
  else if (help === 3) return Math.ceil(totalChars * 0.5)
  else if (help === 4) return totalChars
  else return 0
}

export const signs = ['¿', '?', '¡', '!', ',', '.', ';', ':']

export const preventRepetition = (arr, length) => {
  const value = generateRandomNum(length)

  if (!arr.includes[value]) return value
  else preventRepetition(arr, length)
}

export const generateIndicesCharsToShow = (sentenceInCharacters, amountCharsToShow, prev) => {
  const validIndices = []
  const indicesCharsToShow = []
  const arrToReturn = []
  amountCharsToShow = amountCharsToShow - prev.filter(el => el).length

  sentenceInCharacters.map((char, index) => {
    if (!signs.includes(char) && char !== ' ' && !prev[index]) validIndices.push(index)
  })

  for (let i = 0; i < amountCharsToShow; i++) {
    indicesCharsToShow.push(preventRepetition(indicesCharsToShow, validIndices.length))
  }

  indicesCharsToShow.forEach(indx => arrToReturn.push(validIndices[indx]))

  return arrToReturn
}