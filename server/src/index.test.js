import { it, expect, describe } from 'vitest'
import request from 'supertest'

import app from './index.js'

describe('route endpoints', () => {
  it('should return server ping response', async () => {
    const expected = {
      name: 'MELI Server',
      version: expect.any(String),
    }

    const result = await request(app).get('/')

    expect(result.statusCode).toEqual(200)
    expect(result.body).toStrictEqual(expected)
  })

  it('should return an error when endpoint not found', async () => {
    const result = await request(app).get('/foo')

    expect(result.status).toEqual(404)
    expect(result.body).toStrictEqual({ code: 404, error: 'not found' })
  })

  it('should return the query endpoint', async () => {
    const result = await request(app).get('/api/items?q=foo')

    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('author')
    expect(result.body).toHaveProperty('items')
  })

  it('should return an error when query not found', async () => {
    const result = await request(app).get('/api/items?q=')
    expect(result.status).toEqual(400)
  })

  it('should return the item endpoint', async () => {
    const result = await request(app).get('/api/items/MLA905204703')
    expect(result.status).toEqual(200)
    expect(result.body).toHaveProperty('author')
    expect(result.body).toHaveProperty('item')
    expect(result.body.item).toHaveProperty('id')
    expect(result.body.item).toHaveProperty('title')
    expect(result.body.item).toHaveProperty('price')
    expect(result.body.item).toHaveProperty('picture')
    expect(result.body.item).toHaveProperty('condition')
    expect(result.body.item).toHaveProperty('free_shipping')
    expect(result.body.item).toHaveProperty('sold_quantity')
    expect(result.body.item).toHaveProperty('description')
  })

  it('should return an error when item id not found', async () => {
    const result = await request(app).get('/api/items/')
    expect(result.status).toEqual(400)
  })
})
