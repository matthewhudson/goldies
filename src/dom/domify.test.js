import domify from "./domify";

test("converts string to dom element", () => {
  expect(domify("<p></p>")).toBeInstanceOf(HTMLParagraphElement);
});
