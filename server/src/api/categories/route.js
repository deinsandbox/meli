import express from 'express'
import { getCategoryById } from './service.js'
import { parseCategoriesModel } from './model.js'
import { isEmptyObject } from '../../helpers/validations.js'

const router = express.Router()

router.get('/categories/:id', async (req, res) => {
  try {
    const { id } = req.params ?? {}
    if (!id) {
      res.status(400)
      res.send({ code: 400, error: 'id is required' })
      return
    }

    const response = await getCategoryById(id)
    if (response?.error) {
      res.status(404)
      res.send('item not found')
      return
    }
    if (response?.ok === false) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    const model = parseCategoriesModel(response.data)
    if (isEmptyObject(model)) {
      throw new Error('Oops! Something went wrong, please try again later.')
    }

    res.status(200)
    res.json({
      author: res.author,
      ...model,
    })
  } catch (e) {
    res.status(500)
    res.send(e.toString())
    return
  }
})

export default router
