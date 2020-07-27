// const numIn = document.getElementsByClassName('number-in')[0]
// const numOut = document.getElementsByClassName('number-out')[0]
// const btn = document.getElementsByClassName('btn')[0]

// btn.addEventListener('click', () => {
//    let msgContent = msgIn.value

//    if (msgContent === '') {
//     alert('please Enter A Message')
//       } else {
//     msgOut.innerHTML = msgContent
//     msgIn.value = ''
//    }
// })


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


console.log(romanize(1000000))