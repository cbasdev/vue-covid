import { getData } from '../src/utils/promise'
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('debería retornar la información de goku', () => {
  return getData(API).then((response) => {
    expect(response.data.name).toBe('goku')
  })
})
it('Debería fallar por url invalida', () => {
  // con una url invalida el catch no debería ser nulo
  expect.assertions(1)
  return getData('asdasd').catch((err) => {
    expect(err).not.toBeNull()
  })
})
