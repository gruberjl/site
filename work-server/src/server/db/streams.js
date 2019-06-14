import {firestore} from './firestore'

export const streams = {
  get: async (uid, channelId) => {
    const collection = firestore.collection('root').doc(uid).collection('streams')

    const snapshot = await collection.where('channelId', '==', channelId).get().catch(error => ({error}))

    if (snapshot.error)
      return {error: snapshot.error}

    const streams = []
    snapshot.forEach(doc => {
      streams.push(doc.data())
    })

    return streams
  }
}
