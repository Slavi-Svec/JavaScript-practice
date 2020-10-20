
// const colorPallete = '0123456789ABCDER'

// const RandomColors = (colors) => {
//   let colorHex = '#'
//   let ColorsRandomise = colors.split('').sort(() => .5 - Math.random()).slice(0,6).join('')
//   colorHex += ColorsRandomise
//   return colorHex
// }


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

// console.log(Object.movieRatings)


// Problem one
// make a function that return the number of movies which have a rating of 9 or over
// example `3`


// let counter = 0
// const test = movieRatings.map((element) => {
//   if (Object.values(element) > 8) {
//     counter += 1
//   }
//   return counter
// })

// console.log('counter =', counter)

// Problem two
// make a function that returns all the movies that have a rating of 9 or over into a new array
// example `[theTermintatorTwo, predator, conanTheBarbarian]`


const movie = movieRatings
  .filter((elem) => Object.values(elem) >= 9)
  .map((item) =>  Object.keys(item))
  .flat()

 console.log(movie)


 const validMoviesOfArray = movieRatings
  .map((movie) => Object.values(movie) > 8 || Object.keys(movie))
  .filter(movie => movie !== true)
  .flat()



// Problem three
// make a function that returns all the movies with their ratings that have a rating of 9 or over into a new array
// example `[{ theTermintatorTwo: 9 }, { predator: 9 }, { conanTheBarbarian: 9 }]

// const movieThree = movieRatings.filter((elem) =>  {
//  return Object.values(elem) >= 9
// })

// console.log(movieThree)
