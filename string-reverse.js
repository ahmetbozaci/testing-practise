const reverseString = (string) => {
  let arr = [];
  arr = string.split('');
  arr.reverse()
  return arr.join('')
}

module.exports = reverseString

