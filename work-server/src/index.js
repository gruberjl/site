import {setup} from './setup'
import {engage} from './engage'
import {followBack} from './follow-back'

const start = async () => {
  await setup()
  run()
}

const run = async () => {
  await engage()
  followBack()
}

start()
setInterval(() => run(), 300000)
