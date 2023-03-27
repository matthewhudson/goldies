import { dedupe } from './array/dedupe.js'

import { getDirectoryTree } from './files/getDirectoryTree.js'
import { getFileType } from './files/getFileType.js'
import { isDirectory } from './files/isDirectory.js'
import { readFile } from './files/readFile.js'

import { getContrast } from './color/getContrast.js'
import { isValidHexSimpleColor } from './color/isValidHexSimpleColor.js'

import { base64ToBlob } from './convert/base64ToBlob.js'
import { fromArray } from './convert/fromArray.js'
import { fromBase64 } from './convert/fromBase64.js'
import { parseJSONFromBytes } from './convert/json.js'
import { toBase64 } from './convert/toBase64.js'

// import {} from './devtools/log.js'
import { attr } from './dom/attr.js'
import { addClass, hasClass, removeClass, toggleClass } from './dom/classes.js'
import { domify } from './dom/domify.js'
import { getCustomCSSVariables } from './dom/getCustomCSSVariables.js'
import { getDataAttributes } from './dom/getDataAttributes.js'
import { $, $$ } from './dom/selectors.js'

import { formatBytes } from './format/formatBytes.js'

import { sh } from './node/sh.js'
import { getAvailablePort } from './node/port.js'

import { clone } from './object/clone.js'
import { filter } from './object/filter.js'
import { has } from './object/has.js'
import { pick } from './object/pick.js'

import { endsWith } from './string/endsWith.js'
import { findUsernames } from './string/findUsernames.js'
import { startsWith } from './string/startsWith.js'

import { isDefined } from './types/isDefined.js'
import { isJSON } from './types/isJSON.js'
import { isNil } from './types/isNil.js'
import { isNull } from './types/isNull.js'
import { isUndefined } from './types/isUndefined.js'
import { isUrl } from './types/isUrl.js'

import { buildQuery } from './utils/buildQuery.js'
import { getQueryString } from './utils/getQueryString.js'
import { getURLParams } from './utils/getURLParams.js'
import { isBrowser } from './utils/isBrowser.js'
import { isServer } from './utils/isServer.js'
import { reloadPageWhenOnline } from './utils/reloadPageWhenOnline.js'
import { escapeHTML } from './utils/escapeHTML.js'
import { isS3, parseS3 } from './utils/s3.js'
import { sleep } from './utils/sleep.js'

export default {
  array: {
    dedupe
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
    getDataAttributes
  },
  color: {
    isValidHexSimpleColor,
    getContrast
  },
  convert: {
    base64ToBlob,
    fromArray,
    fromBase64,
    parseJSONFromBytes,
    toBase64
  },
  files: {
    getDirectoryTree,
    getFileType,
    isDirectory,
    readFile
  },
  format: {
    formatBytes
  },
  string: {
    endsWith,
    findUsernames,
    startsWith
  },
  node: {
    getAvailablePort,
    sh
  },
  types: {
    isDefined,
    isJSON,
    isNil,
    isNull,
    isUrl,
    isUndefined
  },
  object: {
    clone,
    filter,
    has,
    pick
  },
  utils: {
    buildQuery,
    escapeHTML,
    isBrowser,
    isServer,
    isS3,
    getQueryString,
    getURLParams,
    parseS3,
    sleep,
    reloadPageWhenOnline
  }
}
