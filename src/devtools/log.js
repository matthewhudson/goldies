import colors from 'colors'

colors.setTheme({
  error: 'red',
  success: 'green'
})

const ler = msg => {
  console.error(`ERROR: ${msg}`.red)
}

const log = msg => {
  console.log(msg.success)
}

export { ler, log }
