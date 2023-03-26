/**
 * Executes a shell command and return it as a Promise.
 * Original Author: medium.com/@ali.dev/how-to-use-promise-with-exec-in-node-js-a39c4d7bbf77
 *
 * @param {string} cmd
 * @returns {Promise<string>}
 */
export function sh (cmd) {
  const { exec } = require('child_process')
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error)
      }
      resolve(stdout || stderr)
    })
  })
}
