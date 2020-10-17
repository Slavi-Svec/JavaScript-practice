
// const colorPallete = '0123456789ABCDER'

// const RandomColors = (colors) => {
//   let colorHex = '#'
//   let ColorsRandomise = colors.split('').sort(() => .5 - Math.random()).slice(0,6).join('')
//   colorHex += ColorsRandomise
//   return colorHex
// }



// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// // joe.name           // should == 'Joe'

// console.log(joe.greet('kate'))

// console.log(String.prototype)








// const object = [8, 9, 9, 5,8,9]

// const movies = [8, 9, 9, 5, 8, 9]


// const moviesArray = (arr, num) => {
//   let newArr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) {
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }



// const test = movies.filter(num => {
//   return num >= 9
// })

// console.log(test)



const movieRatings = [
  {
    theTermintator: 8,
  },
  {
    theTermintatorTwo: 9,
  },
  {
    predator: 9,
  },
  {
    lastActionHero: 5,
  },
  {
    trueLies: 8,
  },
  {
    conanTheBarbarian: 9,
  },
]

// Problem one
// make a function that return the number of movies which have a rating of 9 or over
// example `3`

console.log(Object.values(movieRatings[0]))


const newArr = movieRatings.map((movie) =>{
  console.log(movieRating)
})



