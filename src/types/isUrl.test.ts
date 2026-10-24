import { isExternalUrl } from './isExternalUrl';
import { isUrl } from './isUrl';

describe('isUrl', () => {
  test('is the deprecated name for isExternalUrl', () => {
    expect(isUrl).toBe(isExternalUrl);
  });
});
