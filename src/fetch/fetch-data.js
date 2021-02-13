const fetchData = async url => {
  const body = await got(url).json()
  if (isEmpty(body)) throw new Error('DATA_NOT_FOUND')
  return body
}
