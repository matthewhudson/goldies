/**
 * Checks if `value` is `undefined`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example <caption>`void 0` IS `undefined`.</caption>
 * isUndefined(void 0)
 * // => true
 * @example <caption>`null` IS NOT `undefined`.</caption>
 * isUndefined(null)
 * // => false
 */
export default function isUndefined (value) {
  return value === undefined
}
