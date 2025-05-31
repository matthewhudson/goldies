/**
 * Convert an HTML string to a DOM element.
 *
 * Parses an HTML string using DOMParser and returns the first child element
 * from the body of the resulting document. This is useful for creating DOM
 * elements from HTML strings in a safe and efficient way.
 *
 * @param html - A valid HTML string to be converted to a DOM element
 * @returns The first child element from the parsed HTML, or undefined if no elements exist
 *
 * @throws {TypeError} When html parameter is not a string
 * @throws {Error} When the HTML string is invalid or results in no elements
 *
 * @example
 * ```typescript
 * // Create a simple paragraph element
 * const paragraph = domify('<p>Hello, World!</p>');
 * console.log(paragraph?.tagName); // 'P'
 * console.log(paragraph?.textContent); // 'Hello, World!'
 *
 * // Create a more complex element with attributes
 * const link = domify('<a href="https://example.com" class="btn">Click me</a>');
 * console.log(link?.getAttribute('href')); // 'https://example.com'
 * console.log(link?.className); // 'btn'
 *
 * // Handle multiple elements (only first is returned)
 * const firstDiv = domify('<div>First</div><div>Second</div>');
 * console.log(firstDiv?.textContent); // 'First'
 * ```
 *
 * @example
 * ```typescript
 * // Type checking example
 * const element = domify('<button type="submit">Submit</button>');
 * if (element instanceof HTMLButtonElement) {
 *   console.log(element.type); // 'submit'
 * }
 * ```
 *
 * @public
 */
export function domify(html: string): Element | undefined {
  if (typeof html !== 'string') {
    throw new TypeError('Expected html parameter to be a string');
  }

  if (html.trim() === '') {
    throw new Error('HTML string cannot be empty');
  }

  try {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    // Check for parsing errors
    const parserError = doc.querySelector('parsererror');
    if (parserError) {
      throw new Error(`Invalid HTML: ${parserError.textContent || 'Unknown parsing error'}`);
    }

    // Check if the content is just plain text
    if (doc.body.childNodes.length === 1 && doc.body.firstChild?.nodeType === Node.TEXT_NODE) {
      throw new Error('No valid HTML elements found in the provided string');
    }

    // Get the first element child
    const firstChild = doc.body.firstElementChild;
    if (!firstChild) {
      throw new Error('No valid HTML elements found in the provided string');
    }

    // Clone the element to avoid any potential issues with the document
    return firstChild.cloneNode(true) as Element;
  } catch (error) {
    if (error instanceof TypeError || error instanceof Error) {
      throw error;
    }
    throw new Error(`Failed to parse HTML: ${String(error)}`);
  }
}