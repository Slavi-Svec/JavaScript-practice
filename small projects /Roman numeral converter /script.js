const numOut = document.getElementsByClassName('number-out')[0]
const btn = document.getElementsByClassName('btn')[0]

const romanize = (num) => {
const romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ]
const  numbers = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ]
  let  romanConverted = '', dec, div

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
// console.log(romanize(22))

btn.addEventListener('click', () => {
  const value = document.getElementsByClassName('number-in')[0].value
  const isRomanized = romanize(value)

  isRomanized
    ? numOut.innerHTML = romanize(textInput)
    : numOut.innerHTML = 'NO PALINDROME... no palindrome for you'
})
