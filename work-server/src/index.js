import {setup} from './setup'
import {engage} from './engage'

const start = async () => {
  await setup()
  await engage()
}

start()
