import { dedupe } from './array/dedupe.js';

import { getContrastColor } from './color/getContrastColor.js';
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
    addClass: typeof addClass;
    hasClass: typeof hasClass;
    removeClass: typeof removeClass;
    toggleClass: typeof toggleClass;
    getCustomCSSVariables: typeof getCustomCSSVariables;
    getDataAttributes: typeof getDataAttributes;
  };
  color: {
    isValidHexColor: typeof isValidHexColor;
    getContrastColor: typeof getContrastColor;
  };
  convert: {
    base64ToBlob: typeof base64ToBlob;
    fromArray: typeof fromArray;
    fromBase64: typeof fromBase64;
    parseJSONFromBytes: typeof parseJSONFromBytes;
    toBase64: typeof toBase64;
  };
  format: {
    formatBytes: typeof formatBytes;
  };
  string: {
    endsWith: typeof endsWith;
    findUsernames: typeof findUsernames;
    startsWith: typeof startsWith;
  };
  types: {
    isDefined: typeof isDefined;
    isJSON: typeof isJSON;
    isNil: typeof isNil;
    isNull: typeof isNull;
    isUrl: typeof isUrl;
    isUndefined: typeof isUndefined;
  };
  object: {
    clone: typeof clone;
    filter: typeof filter;
    has: typeof has;
    pick: typeof pick;
  };
  utils: {
    buildQuery: typeof buildQuery;
    escapeHTML: typeof escapeHTML;
    isBrowser: typeof isBrowser;
    isServer: typeof isServer;
    isS3: typeof isS3;
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
    isValidHexColor,
    getContrastColor,
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
