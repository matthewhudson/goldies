import { error } from '../utils/errors.mjs'

const isServer = typeof window === 'undefined'
const fetch = isServer ? require('node-fetch') : window.fetch

function check (res) {
  if (res.status !== 200) error(res.status, res.statusText, res.url)
  return res.json()
}

export function get (url, opts = {}, fn) {
  fetch(url, opts)
    .then(res => check(res))
    .then(json => fn(json))
    .catch(err => error(err.message || err))
}
