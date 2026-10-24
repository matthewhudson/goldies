import { dedupe } from './array/dedupe.js';

import { calculateRelativeLuminance } from './color/calculateRelativeLuminance.js';
import { generateRandomHexColor } from './color/generateRandomHexColor.js';
import { generateRandomHexColorInRange } from './color/generateRandomHexColorInRange.js';
import { getContrastColor } from './color/getContrastColor.js';
import { getContrastRatio } from './color/getContrastRatio.js';
import { hexToRgb } from './color/hexToRgb.js';
import { isValidHexColor } from './color/isValidHexColor.js';

import { base64ToBlob } from './convert/base64ToBlob.js';
import { fromArray } from './convert/fromArray.js';
import { fromBase64 } from './convert/fromBase64.js';
import { parseJSONFromBytes } from './convert/parseJSONFromBytes.js';
import { toBase64 } from './convert/toBase64.js';

import { attr } from './dom/attr.js';
import { addClass, hasClass, removeClass, toggleClass } from './dom/classes.js';
import { domify } from './dom/domify.js';
import { getCustomCSSVariables } from './dom/getCustomCSSVariables.js';
import { getDataAttributes } from './dom/getDataAttributes.js';
import { $, $$ } from './dom/selectors.js';

import { formatBytes } from './format/formatBytes.js';

import { clone } from './object/clone.js';
import { filter } from './object/filter.js';
import { has } from './object/has.js';
import { pick } from './object/pick.js';

import { endsWith } from './string/endsWith.js';
import { findUsernames } from './string/findUsernames.js';
import { startsWith } from './string/startsWith.js';

import { isDefined } from './types/isDefined.js';
import { isExternalUrl } from './types/isExternalUrl.js';
import { isJSON } from './types/isJSON.js';
import { isNil } from './types/isNil.js';
import { isNull } from './types/isNull.js';
import { isUndefined } from './types/isUndefined.js';
import { isUrl } from './types/isUrl.js';

import { buildQuery } from './utils/buildQuery.js';
import { getURLParams } from './utils/getURLParams.js';
import { isBrowser } from './utils/isBrowser.js';
import { isServer } from './utils/isServer.js';
import { reloadPageWhenOnline } from './utils/reloadPageWhenOnline.js';
import { escapeHTML } from './utils/escapeHTML.js';
import { isS3, parseS3 } from './utils/s3.js';
import { sleep } from './utils/sleep.js';

// Define the browser-specific interface
export interface BrowserGoldies {
  array: {
    dedupe: typeof dedupe;
  };
  dom: {
    $: typeof $;
    $$: typeof $$;
    attr: typeof attr;
    domify: typeof domify;
    /** @deprecated Use `element.classList.add(className)`. Removed in goldies 6.0. */
    addClass: typeof addClass;
    /** @deprecated Use `element.classList.contains(className)`. Removed in goldies 6.0. */
    hasClass: typeof hasClass;
    /** @deprecated Use `element.classList.remove(className)`. Removed in goldies 6.0. */
    removeClass: typeof removeClass;
    /** @deprecated Use `element.classList.toggle(className)`. Removed in goldies 6.0. */
    toggleClass: typeof toggleClass;
    getCustomCSSVariables: typeof getCustomCSSVariables;
    /** @deprecated Use `element.dataset`. Removed in goldies 6.0. */
    getDataAttributes: typeof getDataAttributes;
  };
  color: {
    calculateRelativeLuminance: typeof calculateRelativeLuminance;
    generateRandomHexColor: typeof generateRandomHexColor;
    generateRandomHexColorInRange: typeof generateRandomHexColorInRange;
    getContrastColor: typeof getContrastColor;
    getContrastRatio: typeof getContrastRatio;
    hexToRgb: typeof hexToRgb;
    isValidHexColor: typeof isValidHexColor;
  };
  convert: {
    base64ToBlob: typeof base64ToBlob;
    /** @deprecated Use `String(arr)`. Removed in goldies 6.0. */
    fromArray: typeof fromArray;
    fromBase64: typeof fromBase64;
    parseJSONFromBytes: typeof parseJSONFromBytes;
    toBase64: typeof toBase64;
  };
  format: {
    formatBytes: typeof formatBytes;
  };
  string: {
    /** @deprecated Use `str.toLowerCase().endsWith(ends.toLowerCase())`. Removed in goldies 6.0. */
    endsWith: typeof endsWith;
    findUsernames: typeof findUsernames;
    /** @deprecated Use `haystack.toLowerCase().startsWith(needle.toLowerCase())`. Removed in goldies 6.0. */
    startsWith: typeof startsWith;
  };
  types: {
    isDefined: typeof isDefined;
    isExternalUrl: typeof isExternalUrl;
    isJSON: typeof isJSON;
    isNil: typeof isNil;
    isNull: typeof isNull;
    /** @deprecated Renamed to `isExternalUrl`. Removed in goldies 6.0. */
    isUrl: typeof isUrl;
    isUndefined: typeof isUndefined;
  };
  object: {
    /** @deprecated Use `structuredClone(obj)`. Removed in goldies 6.0. */
    clone: typeof clone;
    filter: typeof filter;
    /** @deprecated Use `Object.hasOwn(target, key)`. Removed in goldies 6.0. */
    has: typeof has;
    pick: typeof pick;
  };
  utils: {
    /** @deprecated Use `new URLSearchParams(data).toString()`. Removed in goldies 6.0. */
    buildQuery: typeof buildQuery;
    escapeHTML: typeof escapeHTML;
    isBrowser: typeof isBrowser;
    isServer: typeof isServer;
    isS3: typeof isS3;
    /** @deprecated Use `Object.fromEntries(new URL(url).searchParams)`. Removed in goldies 6.0. */
    getURLParams: typeof getURLParams;
    parseS3: typeof parseS3;
    sleep: typeof sleep;
    reloadPageWhenOnline: typeof reloadPageWhenOnline;
  };
}

// Create browser-only bundle
const browserGoldies: BrowserGoldies = {
  array: {
    dedupe,
  },
  dom: {
    $,
    $$,
    attr,
    domify,
    addClass,
    hasClass,
    removeClass,
    toggleClass,
    getCustomCSSVariables,
    getDataAttributes,
  },
  color: {
    calculateRelativeLuminance,
    generateRandomHexColor,
    generateRandomHexColorInRange,
    getContrastColor,
    getContrastRatio,
    hexToRgb,
    isValidHexColor,
  },
  convert: {
    base64ToBlob,
    fromArray,
    fromBase64,
    parseJSONFromBytes,
    toBase64,
  },
  format: {
    formatBytes,
  },
  string: {
    endsWith,
    findUsernames,
    startsWith,
  },
  types: {
    isDefined,
    isExternalUrl,
    isJSON,
    isNil,
    isNull,
    isUrl,
    isUndefined,
  },
  object: {
    clone,
    filter,
    has,
    pick,
  },
  utils: {
    buildQuery,
    escapeHTML,
    isBrowser,
    isServer,
    isS3,
    getURLParams,
    parseS3,
    sleep,
    reloadPageWhenOnline,
  },
};

export default browserGoldies;
