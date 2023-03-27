import net from 'net'
import { getAvailablePort } from './port'

describe('getAvailablePort', () => {
  it('should find an available port starting from the specified port', async () => {
    const port = await getAvailablePort(3000)
    expect(port).toBeGreaterThanOrEqual(3000)
    expect(port).toBeLessThanOrEqual(65535)
  })

  it('should find an available port starting from the default port', async () => {
    const port = await getAvailablePort()
    expect(port).toBeGreaterThanOrEqual(3000)
    expect(port).toBeLessThanOrEqual(65535)
  })

  // it('should throw an error when no available port is found', async () => {
  //   await expect(getAvailablePort(65535)).rejects.toThrow('No available port found.')
  // })
})
