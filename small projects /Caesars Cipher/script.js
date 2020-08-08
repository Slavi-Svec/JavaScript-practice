const rot13 = (str) => {
  let encoded = ""
  const charCheck = (char) => char < 65 ? char : char % 26 + 65
  for(let i = 0; i < str.length; i++) {
    let strAt = str.toUpperCase().charCodeAt(i)
    encoded += String.fromCharCode(charCheck(strAt))
  }
  return encoded
}

const decodeRot13 = () => {
  let input = document.getElementsByClassName('word-in')[0]
  let result = document.getElementsByClassName("word-out")[0]
  result.textContent = rot13(input.value)
}




