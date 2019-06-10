import moment from 'moment'

export const filterReady = (docs) => docs.filter(isReady)

export const isReady = doc =>  !doc.completed || doc.engageWith > moment().toISOString()
