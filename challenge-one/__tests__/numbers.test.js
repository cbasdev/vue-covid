/*
toBeGreaterThan()
toBeGreaterThanOrEqual()
toBeLessThan()
toBeLessThanOrEqual()
toBe()
toBeCloseTo()
toEqual()
*/

test('2 + 2', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.01)
  expect(value).toBe(4)
})

test('adding floating point number', () => {
  const value = 0.1 + 0.2
  expect(value).toBeCloseTo(0.3)
})
