// Adapted from: https://github.com/jeremydaly/lambda-api/blob/master/lib/utils.js
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
}

export const escapeHTML = html => html.replace(/[&<>"']/g, s => entityMap[s])
