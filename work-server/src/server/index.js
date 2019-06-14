import express from 'express'
import cors from 'cors'
import {authenticate} from './middleware'
import {getPosts} from './posts'

const app = express()
const port = 3001

app.use(cors())
app.use(express.json())
app.use(authenticate)

app.get('/api/posts.json', getPosts)

export const start = () => {
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
}
