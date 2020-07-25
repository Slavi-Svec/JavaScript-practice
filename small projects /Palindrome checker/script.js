const btn = document.getElementsByClassName ('btn')[0]
btn.addEventListener('click', () => {
console.log('hello')
})






function palindrome(str) {
  const filteredString = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '')

  if (filteredString === filteredString.split("").reverse().join("")) {
    return true
  }

  return false
}

console.log(palindrome("_eye"));