const reverse = (str) => {
  if(typeof str !== 'string'){
    throw new Error('reverse should pass a string argument.')
  }
  return str.split('').reverse().join('')
}

export default reverse