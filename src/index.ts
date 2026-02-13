import { dedupe } from './array/dedupe';

import { getDirectoryTree } from './files/getDirectoryTree';
import { getFileType } from './files/getFileType';
import { isDirectory } from './files/isDirectory';
import { readFile } from './files/readFile';

import { getContrastColor } from './color/getContrastColor';
import { isValidHexColor } from './color/isValidHexColor';

import { base64ToBlob } from './convert/base64ToBlob';
import { fromArray } from './convert/fromArray';
import { fromBase64 } from './convert/fromBase64';
import { parseJSONFromBytes } from './convert/parseJSONFromBytes';
import { toBase64 } from './convert/toBase64';

import { attr } from './dom/attr';
import { addClass, hasClass, removeClass, toggleClass } from './dom/classes';
import { domify } from './dom/domify';
import { getCustomCSSVariables } from './dom/getCustomCSSVariables';
import { getDataAttributes } from './dom/getDataAttributes';
import { $, $$ } from './dom/selectors';

import { formatBytes } from './format/formatBytes';

import { sh } from './node/sh';
import { getAvailablePort } from './node/port';

import { clone } from './object/clone';
import { filter } from './object/filter';
import { has } from './object/has';
import { pick } from './object/pick';

import { endsWith } from './string/endsWith';
import { findUsernames } from './string/findUsernames';
import { startsWith } from './string/startsWith';

import { isDefined } from './types/isDefined';
import { isJSON } from './types/isJSON';
import { isNil } from './types/isNil';
import { isNull } from './types/isNull';
import { isUndefined } from './types/isUndefined';
import { isUrl } from './types/isUrl';

import { buildQuery } from './utils/buildQuery';
// getQueryString import removed - file not found
import { getURLParams } from './utils/getURLParams';
import { isBrowser } from './utils/isBrowser';
import { isServer } from './utils/isServer';
import { reloadPageWhenOnline } from './utils/reloadPageWhenOnline';
import { escapeHTML } from './utils/escapeHTML';
import { isS3, parseS3 } from './utils/s3';
import { sleep } from './utils/sleep';

export interface Goldies {
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
  files: {
    getDirectoryTree: typeof getDirectoryTree;
    getFileType: typeof getFileType;
    isDirectory: typeof isDirectory;
    readFile: typeof readFile;
  };
  format: {
    formatBytes: typeof formatBytes;
  };
  string: {
    endsWith: typeof endsWith;
    findUsernames: typeof findUsernames;
    startsWith: typeof startsWith;
  };
  node: {
    getAvailablePort: typeof getAvailablePort;
    sh: typeof sh;
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
    // getQueryString removed - file not found
    getURLParams: typeof getURLParams;
    parseS3: typeof parseS3;
    sleep: typeof sleep;
    reloadPageWhenOnline: typeof reloadPageWhenOnline;
  };
}

const goldies: Goldies = {
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
  files: {
    getDirectoryTree,
    getFileType,
    isDirectory,
    readFile,
  },
  format: {
    formatBytes,
  },
  string: {
    endsWith,
    findUsernames,
    startsWith,
  },
  node: {
    getAvailablePort,
    sh,
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
    // getQueryString removed
    getURLParams,
    parseS3,
    sleep,
    reloadPageWhenOnline,
  },
};

export default goldies;
