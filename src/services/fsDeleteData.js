import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const db = getFirestore()

export async function fsDeleteData({ email, language, id }) {
  const ref = doc(db, `Users/${email}/${language}/${id}`)

  try {
    await deleteDoc(ref)
  } catch (error) {
    alert('Error al borrar')
    return new Error(error)
  }
}
