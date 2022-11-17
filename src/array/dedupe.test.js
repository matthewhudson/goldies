import dedupe from "./dedupe";

test("dedupes an array", () => {
  expect(dedupe([1, 2, 2])).toStrictEqual([1, 2]);
});
