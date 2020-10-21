import sum from '../src/utils/sum'

// Es util si queremos describir por grupo
describe('unit test to sum', () => {
  test('1+2 is 3', () => {
    // Dentro del test debemos esperar algo, es decir, una espectativa
    expect(sum(1, 2)).toBe(3)
  })
  // It es similar a test
  it('should return 3 whith 1 + 2', () => {
    expect(sum(1, 2)).toBe(3)
  })
  test('1+ (-2) is -1', () => {
    // Dentro del test debemos esperar algo, es decir, una espectativa
    expect(sum(1, -2)).toBe(-1)
  })
  test('-1 + (-2) is -3', () => {
    // Dentro del test debemos esperar algo, es decir, una espectativa
    expect(sum(-1, -2)).toBe(-3)
  })
})
