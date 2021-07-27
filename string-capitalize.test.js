const capitalize = require('./string-capitalize');

test('Argument first letter should capitalized', () => {
  expect(capitalize('hello')).toBe('Hello')
})

test('Argument should be a string', () => {
  expect(() => { capitalize(41); }).toThrow();
})
