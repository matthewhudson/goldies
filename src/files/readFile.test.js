import tmp from 'tmp'
import fs from 'fs'
import { readFile } from './readFile'

describe('readFile', () => {
  let tmpDir

  beforeAll(() => {
    // Create a temporary directory
    tmpDir = tmp.dirSync({ unsafeCleanup: true }).name
  })

  // afterAll(() => {
  // Cleanup the temporary directory
  // tmpDir.removeCallback()
  // })

  test('should read the content of a file and return it as a string', async () => {
    const fileContent = 'Hello, world!'
    const filePath = `${tmpDir}/test.txt`

    // Create a file in the temporary directory
    fs.writeFileSync(filePath, fileContent)

    // Read the file and compare the contents
    const content = await readFile(filePath)
    expect(content).toEqual(fileContent)
  })
})
