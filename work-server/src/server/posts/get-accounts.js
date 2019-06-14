import {db} from '../db'

export const getAccounts = async (req, res, next) => {
  const uid = req.decodedToken.uid

  req.accounts = await db.accounts.get(uid)

  if (req.accounts.error) {
    return res.status(460).json({error: req.accounts})
  }

  next()
}
