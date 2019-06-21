let collections = {}

export const getCollection = (collectionName) => collections[collectionName]

export const setCollection = (collectionName, collection) => {
  collections[collectionName] = collection
  return collections[collectionName]
}
