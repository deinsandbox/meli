import express from 'express'
import { getItemById } from './service.js'
import { parceItemModel } from './model.js'
import { isEmptyObject } from '../../helpers/validations.js'

const router = express.Router()

router.get('/items/:id', async (req, res) => {
  try {
    const { id } = req.params ?? {}
    if (!id) {
      res.status(400)
      res.send({ code: 400, error: 'id is required' })
      return
    }

    const response = await getItemById(id)
    if (response?.error) {
      res.status(404)
      res.send('item not found')
    }
    if (response?.ok === false) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    const model = parceItemModel(response.data)
    if (isEmptyObject(model)) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    res.status(200)
    res.json({
      author: res.author,
      item: model,
    })
  } catch (e) {
    res.status(500)
    res.send(e.toString())
  }
})

export default router
