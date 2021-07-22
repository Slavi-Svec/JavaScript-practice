// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.



// const findOdd = (A) => {
//   const arrFrequencey = A.reduce((accumulator, currentValue) => accumulator.set(currentValue, (accumulator.get(currentValue) || 0) + 1), new Map())
//   const NumbersFrequency = [...arrFrequencey.entries()]
  // for(let i = 0; i < NumbersFrequency.length; i++) {
  //   for(let j = 0; j < NumbersFrequency[1].length; j++) {
  //   }
  //   return (NumbersFrequency[i][1])
  // }
  // return NumbersFrequency
// }





// console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// // console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))
// console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]))
// // console.log(findOdd([10]))
// console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]))



// // console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))



let chunked = [[3,2], [4,2], [5,3]]
// let chunked = [[1,2,3], [4,5,6], [7,8,9]];

for(let i = 0; i < chunked.length; i++) {
  for(let j = 0; j < chunked[1].length; j++) {
  }
  console.log(chunked[i][1])
}



// let chunked = [[3,2], [4,2], [5,3]]
// // let chunked = [[1,2,3], [4,5,6], [7,8,9]];
// const got = (chunked) => {
//   for(let i = 0; i < chunked.length; i++) {
//     for(let j = 0; j < chunked[1].length; j++) {
//     }
//     const a = (chunked[i][1])
//     return a

//   }
// }

// console.log(got([[3,2], [4,2], [5,3]]))




