const colors = require('colors')

colors.setTheme({
  error: 'red',
  success: 'green'
})

const le = msg => {
  console.error(`[ERROR]: ${msg}`.red)
}

const l = msg => {
  console.log(msg.success)
}

export { le, l }
