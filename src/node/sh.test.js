// Jest test block
import { sh } from './sh.js'

describe('sh', () => {
  test('executes shell command and returns output', async () => {
    const output = await sh('echo hello')
    expect(output.trim()).toEqual('hello')
  })

  test('handles shell command errors', async () => {
    const output = await sh('this_command_does_not_exist')
    expect(output).toMatch(/not found/)
  })
})
