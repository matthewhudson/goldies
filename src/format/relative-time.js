/**
 * Originally adapted from https://github.com/azer/relative-date.
 * We're including it because of https://github.com/npm/npm/issues/12012
 */

const SECOND = 1000
const MINUTE = 60 * SECOND
const HOUR = 60 * MINUTE
const DAY = 24 * HOUR
const WEEK = 7 * DAY
const YEAR = DAY * 365
const MONTH = YEAR / 12
const shortFormats = [
  [0.7 * MINUTE, 'now'],
  [1.5 * MINUTE, '1m'],
  [60 * MINUTE, 'm', MINUTE],
  [1.5 * HOUR, '1h'],
  [DAY, 'h', HOUR],
  [2 * DAY, '1d'],
  [7 * DAY, 'd', DAY],
  [1.5 * WEEK, '1w'],
  [MONTH, 'w', WEEK],
  [1.5 * MONTH, '1mo'],
  [YEAR, 'mo', MONTH],
  [1.5 * YEAR, '1y'],
  [Number.MAX_VALUE, 'y', YEAR]
]
const longFormats = [
  [0.7 * MINUTE, 'just now'],
  [1.5 * MINUTE, 'a minute ago'],
  [60 * MINUTE, 'minutes ago', MINUTE],
  [1.5 * HOUR, 'an hour ago'],
  [DAY, 'hours ago', HOUR],
  [2 * DAY, 'yesterday'],
  [7 * DAY, 'days ago', DAY],
  [1.5 * WEEK, 'a week ago'],
  [MONTH, 'weeks ago', WEEK],
  [1.5 * MONTH, 'a month ago'],
  [YEAR, 'months ago', MONTH],
  [1.5 * YEAR, 'a year ago'],
  [Number.MAX_VALUE, 'years ago', YEAR]
]

function relativeDate (input_, reference_, useShortVariant = false) {
  let input = input_
  let reference = reference_

  if (input instanceof Date) {
    input = input.getTime()
  } // flowlint-next-line sketchy-null-number:off

  if (!reference) {
    reference = new Date().getTime()
  }

  if (reference instanceof Date) {
    reference = reference.getTime()
  }

  const delta = reference - input
  const formats = useShortVariant ? shortFormats : longFormats

  for (const [limit, relativeFormat, remainder] of formats) {
    if (delta < limit) {
      if (typeof remainder === 'number') {
        return (
          Math.round(delta / remainder) +
          (useShortVariant ? '' : ' ') +
          relativeFormat
        )
      } else {
        return relativeFormat
      }
    }
  }

  throw new Error('This should never be reached.')
}
