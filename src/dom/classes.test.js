import { hasClass, addClass, removeClass, toggleClass } from './classNameUtils'

describe('DOM class manipulation', () => {
  let $element

  beforeEach(() => {
    $element = document.createElement('div')
  })

  it('checks if an element has a given CSS class name', () => {
    $element.classList.add('test-class')
    expect(hasClass($element, 'test-class')).toBe(true)
    expect(hasClass($element, 'another-class')).toBe(false)
  })

  it('adds a CSS class name to an element', () => {
    addClass($element, 'another-class')
    expect($element.classList.contains('another-class')).toBe(true)
  })

  it('removes a CSS class name from an element', () => {
    $element.classList.add('another-class')
    removeClass($element, 'another-class')
    expect($element.classList.contains('another-class')).toBe(false)
  })

  it('toggles a CSS class name on an element', () => {
    toggleClass($element, 'another-class')
    expect($element.classList.contains('another-class')).toBe(true)
    toggleClass($element, 'another-class')
    expect($element.classList.contains('another-class')).toBe(false)
  })
})
