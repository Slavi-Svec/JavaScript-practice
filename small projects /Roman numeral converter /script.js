const numOut = document.getElementsByClassName('number-out')[0]
const btn = document.getElementsByClassName('btn')[0]
const emoji = String.fromCodePoint(0x1F621)

const romanize = (num) => {
const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
const  numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  let  romanConverted = ''
  let dec = 0
  let div = 0

   for (let i = 0; i < numbers.length; i++) {
     dec = numbers[i]
     div = Math.floor(num / dec)

    if (div > 0) {
      romanConverted += romanNumeral[i].repeat(div)
      num = num % dec
    }
  }
  return romanConverted
}

btn.addEventListener('click', () => {
  let value = Number(document.getElementsByClassName('number-in')[0].value)
  if (Number.isInteger(value) && value<=4999 && value>0) {
    numOut.innerHTML = romanize(value)
  } else {
    numOut.innerHTML = 'can only convert' + '<br>' + 'a <u>number</u>' + '<br>' + 'up to 4999'.concat(emoji)
  }
})



