// https://github.com/mirabeau-nl/frontend-boilerplate/blob/master/src/static/js/main.js
export default ready = () => {
  if (
    document.readyState === 'interactive' ||
    document.readyState === 'complete'
  ) {
    return Promise.resolve()
  }

  return new Promise(resolve =>
    document.addEventListener('DOMContentLoaded', resolve)
  )
}

// ready().then(() => { })
