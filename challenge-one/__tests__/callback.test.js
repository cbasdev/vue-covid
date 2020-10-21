import { fetchAPI } from '../src/utils/callback'

it('Should return the goku info', (done) => {
  const API = 'https://dragon-ball-api.herokuapp.com/api/character/goku'

  fetchAPI(API, (err, data) => {
    try {
      // Esperamos que el error sea nulo
      expect(err).toBeNull()
      // Esperamos que la data no sea vacía
      expect(data).not.toBeNull()
      // Esperamos que el nombre sea goku
      expect(data.name).toBe('goku')
      // Si llegamos hasta la ultima linea
      done()
    } catch (error) {
      done(error)
    }
  })
})
