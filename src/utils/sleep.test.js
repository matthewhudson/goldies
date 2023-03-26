import { sleep } from './sleep'

describe('sleep', () => {
  test('pauses execution for the specified duration', async () => {
    const start = Date.now()
    await sleep(500)
    const end = Date.now()
    const elapsed = end - start

    expect(elapsed).toBeGreaterThanOrEqual(500)
    expect(elapsed).toBeLessThan(600)
  })
})
