let collections = {}

export const collectionNames = [
  'accounts',
  'channels',
  'journals',
  'questions',
  'streams',
  'tasks'
]

export const getCollection = (collectionName) => collections[collectionName]

export const setCollection = (collectionName, collection) => {
  collections[collectionName] = collection
  return collections[collectionName]
}
