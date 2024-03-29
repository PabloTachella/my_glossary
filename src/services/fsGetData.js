import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const db = getFirestore()

export async function fsGetGlossaryByLanguage(uid, language) {
  try {
    let data = []
    const ref = `Glossaries/${uid}/${language}`

    const querySnapshot = await getDocs(collection(db, ref))
    querySnapshot.forEach(doc => {
      data.push({ ...doc.data(), id: doc.id })
    })

    return { data }
  } catch (error) {
    return new Error(error)
  }
}

export async function fsGetListToPractice({ uid, language }) {
  try {
    let data = []
    const date = Date.now()
    const ref = `Glossaries/${uid}/${language}`
    
    const q = query(collection(db, ref), where("repracticeDate", "<=", date));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      data.push({ ...doc.data(), id: doc.id });
    });
    return data
  } catch (error) {
    return new Error(error)
  }
}