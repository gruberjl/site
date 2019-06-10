import {login} from './login'
import {waitForDocs} from './wait-for-docs'

export const setup = async () => {
  await login()
  await waitForDocs()
}
