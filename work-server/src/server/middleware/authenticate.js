import {db} from '../db'

export const authenticate = (req, res, next) => {
  const idToken = req.header('x-id-token')
  if (!idToken)
    res.status(400).json({error: 'no x-id-token header set'})

  db.admin.auth().verifyIdToken(idToken).then(decodedToken => {
    req.decodedToken = decodedToken
    next()
  }).catch(error => {
    res.status(403).json({error})
  })
}
