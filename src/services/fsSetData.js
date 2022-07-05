import { getFirestore, collection, addDoc } from "firebase/firestore";

const db = getFirestore()

export async function fsPostData({ email, entry, translation, isSentence, language }) {
  const ref = `Users/${email}/${language}`
  const date = Date.now()

  const pair = {
    entry,
    translation,
    date,
    errors: 0,
    isSentence,
    repracticeDate: date,
    lvlUnderstand: 0,
  }

  try {
    // throw new Error('Error de prueba')
    const docRef = await addDoc(collection(db, ref), pair)
    return {...pair, id: docRef.id}
  } catch (e) {
    return new Error(e)
  }
}