import {setup} from './setup'
import {engage} from './engage'
import {followBack} from './follow-back'

const start = async () => {
  await setup()
  await engage()
  await followBack()
}

start()
setInterval(() => engage(), 300000)
setInterval(() => followBack(), 18000000)
