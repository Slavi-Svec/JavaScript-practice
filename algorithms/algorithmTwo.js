// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// const arr = (n) => {
//   const a = [...Array(n + 1).keys()]
//   let b = a.pop()
//   return a.flat(2)
// }

// console.log(arr(5))

// ________________________________________________________________________________________________________________


// how to turn arguments into a string array

// function sort() {
//   var a = Array.prototype.slice.call(arguments);
//   return a.sort();
// }

// ________________________________________________________________________________________________________________




// const theArray = [[10,0],[3,5],[5,8]]
// Test.assertEquals;


  // for (let i = 0; i < busStops.length; i++) {
  //   console.log(busStops[0])
  // }


  // const flatArr = busStops.flat()

  // console.log(flatArr)


// let arr = [10,0,3,5,5,8]

// const number = (busStops) => {
//   const flatArray = [].concat(...busStops)

// let oddFilter = flatArray.filter((x,index) => {
//   return (index % 2 == 0)
// })
//   let oddAdd = oddFilter.reduce((a,b) => {
//     return  a + b
//   })

// let evenFilter = flatArray.filter((x,index) => {
//   return (index % 2)
// })
//   let evenAdd = evenFilter.reduce((a,b) => {
//     return  a + b
// })
// const final = oddAdd - evenAdd
// return final
// }


// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))



// l
// })
// return added

// let flatArray = [10,0,3,5,5,8]



// let evenFilter = arr.filter((x,index) => {
//   return (index % 2)
// })
//   let evenAdd = evenFilter.reduce((a,b) => {
//     return  a + b
// })

// console.log(evenAdd)


// let oddFilter = flatArray
//   .filter((x,index) => (index % 2 == 0))
//   .reduce((a,b) =>  a + b)

// console.log(oddFilter)


// let evenFilter = flatArray
//   .filter((x,index) => (index % 2))
//   .reduce((a,b) =>  a + b)

  // console.log(evenFilter)


// const validMoviesOfArray = movieRatings
// .map((movie) => Object.values(movie) > 8 || Object.keys(movie))
// .filter(movie => movie !== true)
// .flat()

// const number = (busStops) => {
//   let oddFilter = flatArray
//   .filter((x,index) => (index % 2 == 0))
//   .reduce((a,b) =>  a + b)

//   let evenFilter = flatArray
//   .filter((x,index) => (index % 2))
//   .reduce((a,b) =>  a + b)

//   return oddFilter - evenFilter
// }



// console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))

// ________________________________________________________________________________________________________________

// number = 10

// function solution(number){
//   for (let i = 0; i < number; i++) {
//     if (number % 3==0 && number % 5==0) {
//       return 'fizz buzz'
//     } else if (number % 3 == 0) {
//       return 'fizz'
//     } else if (number % 5 == 0) {
//       return 'buzz'
//     } else {
//       return number
//     }
//   }
// }
// console.log(solution(150))

// ________________________________________________________________________________________________________________

// first loop over all th numbers up intil the (number)
// first filter out all the numbers that are divided By
// 3,
// 5,
// 3 & 5



// ________________________________________________________________________________________________________________

// codewars 6kyu  multiples of 3 and 5

// const solution = (number) => {
//   if (number <= 0 ) return 0

//   return [...Array(number).keys()]
//     .filter((num) => num % 3 === 0 || num % 5 === 0)
//     .reduce((a, b) =>  a + b)
// }

// let arrMinusThreeAndFive = numberArray.filter((item) => !filteredArray.includes(item))
// let newArr = arrMinusThreeAndFive.filter((num) =>  num % 3 === 0 || num % 5 === 0) // minuses numbers divisible by 3&5 from the returned array without the numbers divisible by 3,5
// let numbersFiltered = newArr.concat(filteredArray) // merge the 2 arrays together with all the required numbers
// return addedNumbers
// \

// console.log(solution(10))



// ________________________________________________________________________________________________________________

// codewars 6 kyu Who likes it?

//  [1] first step i need to check the array if it has the certain amount of indexes in the array
//  [2] I then need to to a control flow such as an if statemtn or something like that

// const likes  = (names) => {
//   if (names[0] < names)
//   return `${names} likes this`
// }

// console.log((likes(['peter'])))



// const likes = (array) => {
//     if (array && !array.length) {
//       return "no one likes this"
//   } else if (array.length >= 0 && array.length <= 1) {
//     const oneArray = array.splice(0,1)
//       return  `${oneArray} likes this`
//   } else if  (array.length > 1 && array.length <= 2) {
//     const twoArray = array.splice(0,2)
//       return `${twoArray[0]} and ${twoArray[1]} like this`
//   } else if  (array.length > 2 && array.length <= 3) {
//     const threeArray = array.splice(0,3)
//       return `${threeArray[0]}, ${threeArray[1]} and ${threeArray[2]} like this`
//   } else  if (array.length > 3) {
//     const numberCount = array.length - 2
//     const fourArray = array.splice(0,4)
//       return `${fourArray[0]}, ${fourArray[1]} and ${numberCount} others like this`
//   }
// }

// console.log(likes(trumpArray))

const trumpArray = ['trump', 'putin', 'truman']


const likes = (array) => {
  if (array && !array.length) {
    return "no one likes this"
} else if (array.length === 1) {
    return `${array[0]} likes this`
} else if  (array.length === 2) {
    return `${array[0]} and ${array[1]} like this`
} else if  (array.length === 3) {
    return `${array[0]}, ${array[1]} and ${array[2]} like this`
} else  if (array.length > 3) {
    const numberCount = array.length - 2
    return `${array[0]}, ${array[1]} and ${numberCount} others like this`
}
}


console.log(likes(trumpArray))

