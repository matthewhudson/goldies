import fs from 'fs'
import tmp from 'tmp'
import { getDirectoryTree } from './getDirectoryTree'

describe('getDirectory', () => {
  let tmpDir

  beforeAll(() => {
    tmpDir = tmp.dirSync({ unsafeCleanup: true })
    fs.writeFileSync(`${tmpDir.name}/file1.txt`, 'File 1')
    fs.mkdirSync(`${tmpDir.name}/subdirectory`)
    fs.writeFileSync(`${tmpDir.name}/subdirectory/file2.txt`, 'File 2')
    fs.mkdirSync(`${tmpDir.name}/subdirectory/subdirectory2`)
    fs.writeFileSync(`${tmpDir.name}/subdirectory/subdirectory2/file3.txt`, 'File 3')
    fs.mkdirSync(`${tmpDir.name}/empty`)
  })

  afterAll(() => {
    // Cleanup the temporary directory
    tmpDir.removeCallback()
  })

  it('returns an array of file paths', () => {
    const files = getDirectoryTree(tmpDir.name)
    expect(files).toContain(`${tmpDir.name}/file1.txt`)
    expect(files).toContain(`${tmpDir.name}/subdirectory/file2.txt`)
  })

  it('handles nested directories', () => {
    const files = getDirectoryTree(tmpDir.name)
    expect(files).toContain(`${tmpDir.name}/subdirectory/subdirectory2/file3.txt`)
  })

  it('returns an empty array if the directory is empty', () => {
    const files = getDirectoryTree(`${tmpDir.name}/empty`)
    expect(files).toEqual([])
  })

  it('throws an error if the directory does not exist', () => {
    expect(() => {
      getDirectoryTree(`${tmpDir.name}/nonexistent_directory`)
    }).toThrow('ENOENT: no such file or directory')
  })
})
