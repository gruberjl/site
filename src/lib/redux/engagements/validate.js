import moment from 'moment'

export const validate = (doc) => {
  console.log('moment')
  console.log(moment(doc.postAt).isValid())
  return {
    isValid: true,
    doc
  }
}
