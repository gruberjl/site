import {db} from '../db'

export const getStreams = async (req, res, next) => {
  const uid = req.decodedToken.uid
  const channelId = req.query.channelId

  if (!channelId)
    return res.status(440).json({error: 'no query parameter messageId'})

  req.streams = await db.streams.get(uid, channelId)

  if (req.streams.error)
    return res.status(450).json({error: req.streams.error})

  next()
}
