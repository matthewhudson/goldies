/**
 * Set attribute `name` to `val`, or get attr `name`.
 * github.com/bpmn-io/min-dom/blob/master/lib/attr.js
 *
 * @param {Element} el
 * @param {String} name
 * @param {String} [val]
 * @api public
 */
export function attr (el, name, val) {
  // get
  if (arguments.length === 2) {
    return el.getAttribute(name)
  }

  // remove
  if (val === null) {
    return el.removeAttribute(name)
  }

  // set
  el.setAttribute(name, val)

  return el
}
