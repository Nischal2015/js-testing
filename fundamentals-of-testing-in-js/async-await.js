const { sumAsync, subtractAsync } = require("../math");

test("Sum", async () => {
  const result = await sumAsync(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("Subtract", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 6;
  expect(result).toBe(expected);
});
