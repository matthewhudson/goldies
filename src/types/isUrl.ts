import { isExternalUrl } from './isExternalUrl.js';

/**
 * Checks whether a string is a URL pointing at a different host than the current page.
 *
 * @deprecated Renamed to `isExternalUrl` (`goldies/types/isExternalUrl`), which works the same
 * way. `isUrl` will be removed in goldies 6.0. To check whether a string is any valid URL,
 * use the built-in `URL.canParse(str)`.
 */
export const isUrl: typeof isExternalUrl = isExternalUrl;
