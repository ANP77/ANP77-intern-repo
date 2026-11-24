const divide = require('./divide');

test('divides two numbers correctly', () => {
  expect(divide(10, 2)).toBe(5);
});

test('handles negative numbers', () => {
  expect(divide(-10, 2)).toBe(-5);
});

test('throws an error when dividing by zero', () => {
  expect(() => divide(10, 0)).toThrow('Cannot divide by zero.');
});

test('throws an error for invalid inputs', () => {
  expect(() => divide('abc', 2)).toThrow('Inputs must be valid numbers.');
});