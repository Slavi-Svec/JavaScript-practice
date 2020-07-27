const value = document.getElementsByClassName('palindrome-in')[0].value
const textOut = document.getElementsByClassName('palindrome-out')[0]
const btn = document.getElementsByClassName('btn')[0]

const palindrome = (str) => {
   str = str.replace(/\W/g, '').toLowerCase();
   return str === str.split('').reverse().join('');
}

btn.addEventListener('click', () => {
  if (palindrome(value)) {
    textOut.innerHTML = "yes yes yes... you got a palindrome"
  } else {
    textOut.innerHTML = "NO PALINDROME... no palindrome for you";
  }
})

