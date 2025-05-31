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

  test('handles empty string', () => {
    expect(findUsernames('')).toEqual([]);
  });

  test('handles special characters in usernames', () => {
    const haystack = '@user-name @user_name @user123';
    expect(findUsernames(haystack)).toEqual(['@user-name', '@user_name', '@user123']);
  });

  test('handles mixed case usernames', () => {
    const haystack = '@User123 @USER_NAME @user-Name';
    expect(findUsernames(haystack)).toEqual(['@User123', '@USER_NAME', '@user-Name']);
  });

  test('ignores @ symbols that are part of email addresses', () => {
    const haystack = 'email@example.com @username';
    expect(findUsernames(haystack)).toEqual(['@username']);
  });
})
