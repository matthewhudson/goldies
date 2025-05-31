import { reloadPageWhenOnline } from './reloadPageWhenOnline'
import { vi } from 'vitest';

interface CustomWindow extends Window {
  addEventListener: (
    type: string,
    listener: EventListener,
    options?: boolean | AddEventListenerOptions
  ) => void;
  location: Location;
}

describe('reloadPageWhenOnline', () => {
  const originalWindow = global.window;

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
  });

  afterEach(() => {
    // Restore original window after each test
    global.window = originalWindow;
  });

  test('adds an "online" event listener that reloads the page', () => {
    const mockAddEventListener = vi.fn<
      [string, EventListener, boolean | AddEventListenerOptions],
      void
    >();
    const mockReload = vi.fn<[], void>();

    const windowObject = {
      addEventListener: mockAddEventListener,
      location: { reload: mockReload },
    } as unknown as Window;

    reloadPageWhenOnline(windowObject);

    expect(mockAddEventListener).toHaveBeenCalledWith('online', expect.any(Function), {
      once: true,
    });

    // Simulate online event
    const onlineCallback = mockAddEventListener.mock.calls[0][1];
    onlineCallback(new Event('online'));

    expect(mockReload).toHaveBeenCalled();
  });

  test('uses global window object when no window is provided', () => {
    const mockAddEventListener = vi.fn<
      [string, EventListener, boolean | AddEventListenerOptions],
      void
    >();
    const mockReload = vi.fn<[], void>();

    const customWindow: CustomWindow = {
      addEventListener: mockAddEventListener,
      location: { reload: mockReload } as unknown as Location,
    } as unknown as CustomWindow;

    (global as { window: CustomWindow }).window = customWindow;

    reloadPageWhenOnline();

    expect(mockAddEventListener).toHaveBeenCalledWith('online', expect.any(Function), {
      once: true,
    });
  });

  test('throws TypeError when no window object is available', () => {
    // @ts-expect-error - Testing invalid window object
    global.window = undefined;

    expect(() => reloadPageWhenOnline()).toThrow(TypeError);
    expect(() => reloadPageWhenOnline()).toThrow('Window object is required');
  });

  test('handles reload errors gracefully', () => {
    const mockAddEventListener = vi.fn<
      [string, EventListener, boolean | AddEventListenerOptions],
      void
    >();
    const mockReload = vi.fn<[], void>().mockImplementation(() => {
      throw new Error('Reload failed');
    });
    const mockConsoleError = vi.spyOn(console, 'error').mockImplementation(() => {});

    const windowObject = {
      addEventListener: mockAddEventListener,
      location: { reload: mockReload },
    } as unknown as Window;

    reloadPageWhenOnline(windowObject);

    const onlineCallback = mockAddEventListener.mock.calls[0][1];
    onlineCallback(new Event('online'));

    expect(mockConsoleError).toHaveBeenCalledWith('Failed to reload page:', expect.any(Error));
    mockConsoleError.mockRestore();
  });
});
