let collections = {}

export const collectionNames = [
  'accounts',
  'analytics',
  'channels',
  'journals',
  'questions',
  'streams',
  'tasks',
  'engagements'
]

export const getCollection = (collectionName) => collections[collectionName]

export const setCollection = (collectionName, collection) => {
  collections[collectionName] = collection
  return collections[collectionName]
}
