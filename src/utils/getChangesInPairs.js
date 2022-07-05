export default function getChangesInPairs(original, edited) {
  let changes = {}
  const originalIsSentence = original.entry.includes(' ') && original.translation.includes(' ')
  const editedIsSentence = edited.entry.includes(' ') && edited.translation.includes(' ')

  if (original.entry != edited.entry) changes.entry = edited.entry
  if (original.translation != edited.translation) changes.translation = edited.translation
  if (originalIsSentence !== editedIsSentence) changes.isSentence = editedIsSentence

  return changes
}