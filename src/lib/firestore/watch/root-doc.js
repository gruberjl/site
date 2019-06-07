import {db} from '../firebase'
import {set} from '../set'

let listener

export const rootDoc = async (uid, onChange) => {
  if (listener) listener()

  listener = db.collection('root').doc(uid).onSnapshot(async (snapshot) => {
    if (!snapshot.exists) {
      const {error} = await set(db.collection('root'), {id:uid})
      if (error) {
        console.error('error creating root doc in src/lib/firestore/watch/root-doc.js')
        console.error(error.message)
      }
    } else {
      onChange(snapshot.data())
    }
  })
}

export const stopRootDoc = () => {
  if (listener) listener()
}
