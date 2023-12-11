import express from 'express'
import { getItemsByQuery } from './service.js'
import { parseQueryModel } from './model.js'

const router = express.Router()

router.get('/items', async (req, res) => {
  try {
    const { q } = req.query ?? {}
    if (!q) {
      res.status(400)
      res.send({ code: 400, error: 'query is required' })
      return
    }

    const response = await getItemsByQuery(q)
    if (response?.ok === false) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    const { categories, items } = parseQueryModel(response.data) ?? {}

    res.status(200)
    res.json({
      author: res.author,
      categories,
      items,
    })
  } catch (e) {
    res.status(500)
    res.send(e.toString())
    return
  }
})

export default router
