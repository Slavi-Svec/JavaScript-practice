
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


// const digitize = (n) => {
//   const nums = n.toString().split('').reverse().map((i) => {
//     return Number(i)
//   })
//   return nums
// }

// const digitize = (n) => n.toString().split('').reverse().map((i) => Number(i))

// const digitize = (n) => n.toString().split('').reverse().map(Number)


// console.log(digitize(35231))

// __________________________________________________________________________________________________________________________________________

// 8 kyu Basic Mathematical Operations

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.





// __________________________________________________________________________________________________________________________________________


// create a function that returns the character count of a string in an object like so
// charCount('iiEebub) should return { i: 2, e: 2, b: 2, u: 1 }


// first im going to return the string count
// then try to return it as an object

const stringCount = (str) => {
  return str.split ('')
}





console.log(stringCount('iiEebub'))
