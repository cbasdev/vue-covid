/*
toBeNull matches only null
toBeUndefined matches only undefined
toBeDefined matches if the opposite of toBeUndefined
toBeTruthy matches anithyng that an if statement treats as true
toBeFalsy matches anuthing that an if statement treats as false
*/

test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})
