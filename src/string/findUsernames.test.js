import { findUsernames } from './findUsernames'

describe('findUsernames', () => {
  test('returns an array of usernames found in the string', () => {
    const haystack = '@jpotts18 what is up man? Are you hanging out with @kyle_clegg'
    expect(findUsernames(haystack)).toEqual(['@jpotts18', '@kyle_clegg'])
  })

  test('returns an empty array if no usernames are found in the string', () => {
    const haystack = 'There are no usernames in this string.'
    expect(findUsernames(haystack)).toEqual([])
  })
})
