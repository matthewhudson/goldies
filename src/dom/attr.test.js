import { attr } from './attr'

describe('attr', () => {
  test('get attribute', () => {
    const element = document.createElement('div')
    element.setAttribute('style', 'color: red;')
    expect(attr(element, 'style')).toBe('color: red;')
  })

  test('remove attribute', () => {
    const element = document.createElement('div')
    element.setAttribute('style', 'color: red;')
    attr(element, 'style', null)
    expect(element.getAttribute('style')).toBe(null)
  })

  test('set attribute', () => {
    const element = document.createElement('div')
    attr(element, 'id', 'new-element-id')
    expect(element.getAttribute('id')).toBe('new-element-id')
  })
})
