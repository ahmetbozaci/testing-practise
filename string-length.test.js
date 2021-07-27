// Arrange
const stringLength = require('./string-length');

it('"Hello" length equal to 5', () => {
  expect(stringLength("Hello")).toBe(5);
});

it('String length cannot less than 1', () => { 
  expect(() => { stringLength("");}).toThrow();
});

it('String length cannot longer than 10', () => { 
  expect(() => { stringLength("Hello world");}).toThrow();
});

