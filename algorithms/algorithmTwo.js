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

let flatArray = [10,0,3,5,5,8]



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





const number = (busStops) => {
  let oddFilter = flatArray
  .filter((x,index) => (index % 2 == 0))
  .reduce((a,b) =>  a + b)

  let evenFilter = flatArray
  .filter((x,index) => (index % 2))
  .reduce((a,b) =>  a + b)

  return oddFilter - evenFilter
}



console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]))






// ________________________________________________________________________________________________________________