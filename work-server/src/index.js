import moment from 'moment'
import {setup} from './setup'
import {engage} from './engage'

const start = async () => {
  await setup()
  await engage()
}

start()

setInterval(() => start, moment.duration(5, 'minutes').milliseconds())
