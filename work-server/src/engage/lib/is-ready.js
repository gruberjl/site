import moment from 'moment'

export const filterReady = (docs) => docs.filter(isReady)

export const isReady = doc =>  {
  return !doc.completed && moment(doc.performAt).isBefore(moment())
}
