import {watchCollections} from './watch-collections'
import {setDoc} from './set-doc'

export const dbMiddleware = [watchCollections, setDoc]
