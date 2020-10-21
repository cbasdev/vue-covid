import { carsList, brandTec } from '../src/utils/arrays'

describe('Verificar las marcas existentes', () => {
  test('array not null', () => {
    expect(carsList()).not.toBeNull()
  })
  test('should contain BMW', () => {
    expect(carsList()).toContain('BMW')
  })
  test('should longitud defined', () => {
    expect(carsList()).toHaveLength(5)
  })
})

describe('Verificando las marcas de Tec', () => {
  test('should not null', () => {
    expect(brandTec()).not.toBeNull()
  })
})
