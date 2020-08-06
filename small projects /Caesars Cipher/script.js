function rot13(str) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return str
    .split('')
    .map(char => {
      const pos = alphabet.indexOf(char);
      return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
    })
    .join('');
}

  console.log(rot13(''))

function decodeRot13(){
  let input = document.getElementsByClassName('word-in')[0]
  let result = document.getElementsByClassName("word-out")[0]
  result.textContent = rot13(input.value)
}





