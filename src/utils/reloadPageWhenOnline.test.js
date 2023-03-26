import { reloadPageWhenOnline } from './reloadPageWhenOnline'

describe('reloadPageWhenOnline', () => {
  test('adds an "online" event listener that reloads the page', () => {
    const windowObject = {
      addEventListener: jest.fn(),
      location: { reload: jest.fn() }
    }

    reloadPageWhenOnline(windowObject)

    expect(windowObject.addEventListener).toHaveBeenCalledWith(
      'online',
      expect.any(Function),
      false
    )

    const eventHandler = windowObject.addEventListener.mock.calls[0][1]
    eventHandler()

    expect(windowObject.location.reload).toHaveBeenCalled()
  })
})
