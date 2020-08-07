const rot13 = (str) => {
  let decoded = ""
  const charCheck = (char) => char < 65 ? char : char % 26 + 65
  for(let i = 0; i < str.length; i++) {
    var x = str.charCodeAt(i)
    decoded += String.fromCharCode(charCheck(x))
  }
  return decoded
}

console.log(rot13('serr'))

const decodeRot13 = () => {
  let input = document.getElementsByClassName('word-in')[0]
  let result = document.getElementsByClassName("word-out")[0]
  result.textContent = rot13(input.value)
}




