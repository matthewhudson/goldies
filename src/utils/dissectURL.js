dissectURL = url => {
  try {
    let urlProtocol = url.match(/https{0,1}:\/\//).join()
    let urlDomain = url
      .match(/\/\/[\.\w]{1,}/)
      .join()
      .replace('//', '')
    let urlPath = url
      .match(/\w\/.*$/)
      .join()
      .replace(/\w\//, '')
    return { urlProtocol, urlDomain, urlPath }
  } catch (err) {
    throw err
  }
}
