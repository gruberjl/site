import {getStreams} from './get-streams'
import {getAccounts} from './get-accounts'
import {fetchPostsAll} from './fetch-posts'

export const getPosts = [getStreams, getAccounts, async (req, res) => {
  const posts = await fetchPostsAll(req.streams, req.accounts)

  if (posts.error)
    return res.status(470).json({error: posts.error})

  res.json(posts)
}]
