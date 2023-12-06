import express from 'express'

const router = express.Router()

router.get('/items', async (req, res) => {
  try {
    const { q } = req.query ?? {}
    if (!q) {
      res.status(400)
      res.send({ code: 400, error: 'query not found' })
      return
    }

    res.status(200)
    res.send(req.query)
  } catch (e) {
    res.status(500)
    res.send(e.toString())
  }
})

export default router
