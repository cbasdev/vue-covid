test('2+2 = 4', () => {
  expect(2 + 2).toBe(4)
})

test('Object Validation', () => {
  const data = { username: 'sebastian' }
  const data2 = { username: 'goku' }
  // Validar si un objeto es igual a otro
  expect(data).toEqual({ username: 'sebastian' })
  // Validar si un objeto no es igual a otro
  expect(data).not.toEqual(data2)
})
