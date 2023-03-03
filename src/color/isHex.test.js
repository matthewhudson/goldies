import { default as isHex } from "./isHex";

test("returns false for #000", () => {
  expect(isHex("#000")).toBeFalsy();
});

test("returns false for #FFF", () => {
  expect(isHex("#FFF")).toBeFalsy();
});

test("returns true for #FFFFFF", () => {
  expect(isHex("#FFFFFF")).toBeTruthy();
});
