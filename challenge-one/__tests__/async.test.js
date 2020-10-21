import { getData } from '../src/utils/promise'
const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

// Para usar as
it('debería retornar la información de goku', async () => {
  const response = await getData(API)
  expect(response.data.name).toBe('goku')
})
