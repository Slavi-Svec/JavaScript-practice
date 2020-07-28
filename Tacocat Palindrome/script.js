let interval = 0
const images = ['taco-a.png', 'taco-b.png']
const image = document.getElementById('image')
let currentPos = 0

const changeImage = () => {
  if (++currentPos >= images.length)
      currentPos = 0

  image.src = images[currentPos]
}

const textOut = document.getElementsByClassName('palindrome-out')[0]
const btn = document.getElementsByClassName('btn')[0]

const palindrome = (str) => {
   str = str.replace(/\W/g, '').toLowerCase()
   return str === str.split('').reverse().join('')
}

btn.addEventListener('click', () => {
  const value = document.getElementsByClassName('palindrome-in')[0].value
  const isPalindrome = palindrome(value)

  if (isPalindrome) {
    textOut.innerHTML = 'yes yes yes... you got a palindrome!'
    interval = setInterval(changeImage, 300)
  } else {
    textOut.innerHTML = 'NO PALINDROME... no palindrome for you!'
    clearTimeout(interval);
  }
})



