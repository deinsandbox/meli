import express from 'express'
import { getQuery } from './service.js'

const router = express.Router()

router.get('/items', async (req, res) => {
  try {
    const { q } = req.query ?? {}
    if (!q) {
      res.status(400)
      res.send({ code: 400, error: 'query is required' })
      return
    }

    const response = await getQuery(q)
    if (response?.ok === false) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    res.status(200)
    res.json({
      author: res.author,
      items: response.data,
    })
  } catch (e) {
    res.status(500)
    res.send(e.toString())
  }
})

export default router
