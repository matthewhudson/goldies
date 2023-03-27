/**
 * Executes a shell command and returns it as a Promise.
 *
 * @param {string} cmd - The shell command to execute.
 * @returns {Promise<string>} - A Promise that resolves with the output of the shell command.
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
