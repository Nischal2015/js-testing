const { sum, subtract } = require("./math");

test("Sum", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtract", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
