import packageConfig from './package.json' assert { type: 'json' }
import express from 'express'
import compression from 'compression'

import query from './src/routes/api/query.js'
import items from './src/routes/api/items.js'

const { SERVER_PROTOCOL, SERVER_DOMAIN, SERVER_PORT } = process.env

const app = express()
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.status(200)
  res.json({
    name: 'MELI Server',
    version: packageConfig?.version,
  })
})

app.use('/api', query)
app.use('/api', items)

app.get('*', (req, res) => {
  res.status(404)
  res.json({ code: 404, error: 'not found' })
})

app.listen(SERVER_PORT, () => {
  console.info(`MELI Server 🌐 ${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}`)
})
