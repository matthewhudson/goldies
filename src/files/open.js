import fs from 'fs'
import util from 'util'

// Convert fs.readFile into Promise version of same
const readFile = util.promisify(fs.readFile)

async function read (path) {
  return await readFile(path)
}

// Can't use `await` outside of an async function so you need to chain
// with then()
/*
read().then(data => {
  console.log(data)
})

await read('')
*/
