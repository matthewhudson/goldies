import { vi } from 'vitest';
import { JSDOM } from 'jsdom';

// Create a JSDOM instance for testing
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>', {
  url: 'http://localhost',
  contentType: 'text/html',
});

// Mock window and document
global.window = dom.window as unknown as Window & typeof globalThis;
global.document = dom.window.document;
global.DOMParser = dom.window.DOMParser;
global.Node = dom.window.Node;

// Set window.location.href (reload is read-only in JSDOM, so mock it in tests if needed)
window.location.href = 'http://localhost';
// To mock reload in a test, use: vi.spyOn(window.location, 'reload').mockImplementation(() => {});
