const { describe, expect, test } = require('@jest/globals')
const { graphqlRequest } = require('./utils')

describe('Saying hello', () => {
  test('Should say hello world', async () => {
    const query = '{hello}'
    const res = await graphqlRequest(query)

    expect(res.errors).toBeUndefined()
    expect(res.data.hello).toBe('Hello world!')
  })
})
