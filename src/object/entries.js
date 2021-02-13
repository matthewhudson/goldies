export default function objectEntries (obj) {
  if (obj == null) {
    throw new TypeError()
  }

  const entries = []

  for (const key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      Object.prototype.propertyIsEnumerable.call(obj, key)
    ) {
      entries.push([key, obj[key]])
    }
  }

  return entries
}
