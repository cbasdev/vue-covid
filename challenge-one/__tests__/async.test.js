import { getData } from '../src/utils/promise'
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

it('debería retornar la información de goku', async () => {
  const response = await getData(API)
  expect(response.data.name).toBe('goku')
})

it('Debería fallar con url inválida', async () => {
  expect.assertions(1)
  // Estaríamos esperando un error
  try {
    await getData('asdas')
  } catch (error) {
    expect(error).not.toBeNull()
  }
})
