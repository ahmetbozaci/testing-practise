const stringLength = (string) => {
  if (string.length > 1 && string.length < 10) {
    return string.length
  } 
  throw new Error('The length of the string has to be between 1 and 10.');
}



module.exports = stringLength;