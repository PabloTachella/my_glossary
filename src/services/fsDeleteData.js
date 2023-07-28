import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const db = getFirestore()

export async function fsDeleteData({ uid, language, id }) {
  const ref = doc(db, `Glossaries/${uid}/${language}/${id}`)

  try {
    await deleteDoc(ref)
  } catch (error) {
    alert('Error al borrar')
    return new Error(error)
  }
}
