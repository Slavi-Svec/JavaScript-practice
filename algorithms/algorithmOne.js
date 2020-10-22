// RETURN THE LARGEST NUMBER IN AN ARRAY

// * Create a function that finds the largest value in an array
// * It should return the largest number in an array
// * If argument is not an array, it should throw an error with the message 'Please provide a valid argument'

// array = [2, 4, 5, 5, 8]

// Solution 1
// const findLargest = (arr) => {
//  arr.sort((a,b) => a - b).reverse()
//  return arr[0]
// }

// Solution 2
// const findLargest = (array) => array.sort((a, b) => b - a)[0]
// console.log(findLargest(array))


// solution 4
// const findLargest = (arr) => {
//   let largest = 0

//   for (let i = 0; i < arr.length; i++) {
//    if (arr[i] > largest)  {
//     largest = arr[i]
//    }
// }
// return largest
// }


// console.log(findLargest(array))

// _______________________________________________________________________________________________________________

// Duplicat Array
// Create a function that duplicates an array
// const array = ([1, 2, 3, 4, 5])
// [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// const duplicate = array.concat(array)
// console.log(duplicate)

// ________________________________________________________________________________________________________________

// Create a function that concatenates two strings
//  It should return a string with both args concatenated
//  If only one arg is provided, a function should be returned expecting the second arg to concatenate to the first
//  If the first arg is undefined, it should throw an error with the message 'Please provide a valid argument'

  // const concatenate = ('hello', 'goodbye') //=> 'hellogoodbye'
//   const concatenate = ('hello')('goodbye') // => 'hellogoodbye'


// function add(a,b) {
//   if (arguments.length === 1) {
//     return function(b2) { // You could call this arg `b` as well if you like,
//       return a - b2;      // it would shadow (hide, supercede) the one above
//     };
//   }
//   return a + b;
// }

// will need to use below ||
// function concatString (a, b) {
//   if (arguments.length < 2) {
//       throw new Error("This function expects at least two arguments")
//   } else if (a === undefined) {
//     throw new Error ("This function expects at least two arguments")
//   } else if (arguments.length === 2) {
//       return a.concat(b)
//   }
// }


// const concatenate = (arg1, arg2) => {
//   if (!arg1) {
//     throw new Error("Please provide a valid argument");
//   }

//   if (!arg2) {
//     return (arg12) => {
//       return arg1 + arg12;
//     };
//   }

//   return arg1 + arg2;
// };

// console.log(concatenate('hello')('goodbye'))



// ________________________________________________________________________________________________________________

// Create a function that will flatten an array into a single array.
// It should flatten all arrays inside arrays
//  e.g. [[1], [2]] becomes [1, 2]
//  and  [[1], [2, 3], [4, [5]]] becomes [1, 2, 3, 4, 5]

// const array = [[1], [2]]
// const arrayTwo = [[1], [2, 3], [4, [5]]]

// const flatArray = (arr) => {
//   return arr.flat(2)
// }

// console.log(flatArray(arrayTwo))
// console.log(flatArray(array))

// ________________________________________________________________________________________________________________

