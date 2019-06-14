import {firestore} from './firestore'

export const accounts = {
  get: async (uid) => {
    const collection = firestore.collection('root').doc(uid).collection('accounts')

    const snapshot = await collection.get().catch(error => ({error}))

    if (snapshot.error)
      return {error: snapshot.error}

    const streams = []
    snapshot.forEach(doc => {
      streams.push(doc.data())
    })

    return streams
  }
}
