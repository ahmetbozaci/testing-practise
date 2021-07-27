// Arrange
const stringLength = require('./string-length');

test('"Hello" length equal to 5', () => {
  expect(stringLength("Hello")).toBe(5);
});

test('String length cannot less than 1', () => { 
  expect(() => { stringLength("");}).toThrow();
});

test('String length cannot longer than 10', () => { 
  expect(() => { stringLength("Hello world");}).toThrow();
});

