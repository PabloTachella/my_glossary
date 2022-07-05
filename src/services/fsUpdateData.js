import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore()

export async function fsUpdateData({ email, language, changes, id }) {
  const ref = doc(db, `Users/${email}/${language}/${id}`)

  try {
    await updateDoc(ref, {...changes})
  } catch (e) {
    alert("Error al actualizar ");
    return new Error(e)
  }
}
export async function fsUpdatePracticeValues({ email, language, repracticeDate, id, lvlUnderstand, errors }) {
  const ref = doc(db, `Users/${email}/${language}/${id}`)

  try {
    await updateDoc(ref, {repracticeDate, lvlUnderstand, errors})
  } catch (e) {
    console.log(new Error(e))
    return new Error(e)
  }
}