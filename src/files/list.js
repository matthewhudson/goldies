const fs = require('fs')
const path = require('path')

function isDirectory (directoryItems, file) {
  return fs.statSync(path.join(directoryItems, file)).isDirectory()
}

// Reading a given Directory
function readDir (dir) {
  const directoryItems = fs.readdirSync(dir)
  const filelist = []

  directoryItems.forEach(file => {
    if (isDirectory(directoryItems, file)) {
      filelist.push(...readDir(path.join(directoryItems, file)))
    } else {
      filelist.push(path.join(directoryItems, file))
    }
  })
  return filelist
}

export { readDir, isDirectory }
