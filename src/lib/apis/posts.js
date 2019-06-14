import {firestore} from '../firestore'

class Posts {
  get = async (channelId) => {
    const idToken = await firestore.firebase.auth().currentUser.getIdToken(true).catch(error => ({error}))

    if (idToken.error)
      return {error: idToken.error}

    const options = {
      headers: {
        'x-id-token': idToken
      }
    }

    const response = await fetch(`${process.env.API_URL}posts.json?channelId=${channelId}`, options)
      .then(r => r.json())
      .catch(error => ({error}))

    return response
  }
}

export const posts = new Posts()
