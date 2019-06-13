import {setup} from './setup'
import {engage} from './engage'
import {followBack} from './follow-back'
import {getPosts} from './get-posts'

const start = async () => {
  await setup()
  await engage()
  await followBack()
  await getPosts()
}

start()
setInterval(() => engage(), 300000)
setInterval(() => followBack(), 18000000)
setInterval(() => getPosts(), 60000)
