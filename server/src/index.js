import packageConfig from '../package.json' assert { type: 'json' }
import express from 'express'
import compression from 'compression'

import { author } from './middleware/author.js'

import query from './api/query/route.js'
import items from './api/items/route.js'
import categories from './api/categories/route.js'

const { SERVER_PROTOCOL = 'http', SERVER_DOMAIN = 'localhost', SERVER_PORT = '3030' } = process.env ?? {}

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(author)

app.get('/', (req, res) => {
  res.status(200)
  res.json({
    name: 'MELI Server',
    version: packageConfig?.version,
  })
})

app.use('/api', query)
app.use('/api', items)
app.use('/api', categories)

app.get('*', (req, res) => {
  res.status(404)
  res.json({ code: 404, error: 'not found' })
})

app.listen(SERVER_PORT, () => {
  console.info(`MELI Server 🌐 ${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}`)
})

export default app
