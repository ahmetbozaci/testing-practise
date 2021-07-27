const capitalize = (string) => {
  if(typeof(string)  === 'string'){
    return string[0].toUpperCase() + string.slice(1)
  }
   throw new Error('Argument should be a string')
 

}
module.exports = capitalize;