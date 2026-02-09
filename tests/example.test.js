const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check",
  () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total",
  () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("check for no coupon",
  () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("SAVE10 coupon gives 10% discount when below 100 cap",
  () => {
  expect(calculateFinalAmount(800, "SAVE10")).toBe(720);
});

test("FLAT50 boundary case when subtotal is exactly 50",
  () => {
  expect(calculateFinalAmount(50, "FLAT50")).toBe(0);
});

test("Coupon should be case insensitive",
  () => {
  expect(calculateFinalAmount(800, "save10")).toBe(720);
});