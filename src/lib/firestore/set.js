export const set = (collection, data) => {
  return collection.doc(data.id).set(data)
    .then(() => data)
    .catch(error => ({error}))
}
