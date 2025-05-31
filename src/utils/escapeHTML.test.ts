import { escapeHTML } from './escapeHTML'

describe('escapeHTML', () => {
  test('escapes special characters in an HTML string', () => {
    const html = '<div class="example">Hello & welcome!</div>'
    const escaped = escapeHTML(html)
    expect(escaped).toEqual('&lt;div class=&quot;example&quot;&gt;Hello &amp; welcome!&lt;/div&gt;')
  })

  test('does not modify a string without special characters', () => {
    const plainText = 'This is a plain text string.'
    const escaped = escapeHTML(plainText)
    expect(escaped).toEqual(plainText)
  })
})
