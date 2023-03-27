import fs from 'fs'
import path from 'path'
import { isDirectory } from './isDirectory'

describe('isDirectory', () => {
  const directoryPath = './test_directory'
  const fileName = 'test_directory_item.txt'
  const directoryName = 'test_subdirectory'
  const directoryItemPath = path.join(directoryPath, directoryName)

  beforeAll(() => {
    // Create test directory and subdirectory
    fs.mkdirSync(directoryPath)
    fs.mkdirSync(directoryItemPath)
    // Create test file
    fs.writeFileSync(path.join(directoryPath, fileName), 'test')
  })

  afterAll(() => {
    // Remove test directory and subdirectory
    fs.rmdirSync(directoryItemPath)
    fs.unlinkSync(path.join(directoryPath, fileName))
    fs.rmdirSync(directoryPath)
  })

  it('returns true for a subdirectory', () => {
    expect(isDirectory(directoryPath, directoryName)).toBe(true)
  })

  it('returns false for a file', () => {
    expect(isDirectory(directoryPath, fileName)).toBe(false)
  })
})
