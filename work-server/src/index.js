import {setup} from './setup'
import {engage} from './engage'

const start = async () => {
  await setup()
  run()
}

const run = async () => {
  await engage()
}

start()
setInterval(() => run(), 300000)
