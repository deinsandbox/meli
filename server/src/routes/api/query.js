import express from 'express'

const router = express.Router()

router.get('/items', async (req, res) => {
  try {
    res.status(200)
    res.send(req.query)
  } catch (e) {
    res.status(500)
    res.send(e.toString())
  }
})

export default router
