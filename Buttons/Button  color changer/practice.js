
// const colorPallete = '0123456789ABCDER'

// const RandomColors = (colors) => {
//   let colorHex = '#'
//   let ColorsRandomise = colors.split('').sort(() => .5 - Math.random()).slice(0,6).join('')
//   colorHex += ColorsRandomise
//   return colorHex
// }


// function greet(myName, yourName){
//   return "Hello " + yourName + ", my name is " + myName;
// }

// console.log(greet('sam', 'piggle')
// )

// const john = {
//   name: 'john',
//   color: 'pink',
//   greet: function() {
//    return 'hello ' + john.name + ' colors i like ' + john.color + '.'
//   }
// }

// console.log(john.greet())


// function greet() {
//   myName: 'name',
//   yourName: 'names',
//     greeting: function () {
//       return 'Hello ' + greet.yourName + ', my name is ' +  greet.myName + '.'
//     }
// }

// console.log(greet.greeting())

// function person (myName, yourName) {
//   this.myName = myName,
//   this.yourName = yourName,
//     this.greet = function() {
//     return 'Hello ' + this.yourName + ', my name is ' +  this.myName + ''
//   }
// }



// function greet (myName, yourName) {
//   this.myName = myName,
//   this.yourName = yourName,
//     this.person = function() {
//     return 'Hello ' + this.yourName + ', my name is ' +  this.myName + ','
//   }
// }


// function Person (name) {
//   this.name = name
// }

// Person.prototype.greet = function (yourName){
//   return `Hello  ${yourName}, my name is ${this.name}`
// }




// var joe = new Person('Joe');
// joe.greet('Kate'); // should return 'Hello Kate, my name is Joe'
// // joe.name           // should == 'Joe'

// console.log(joe.greet('kate'))

// console.log(String.prototype)




// String.prototype.isUpperCase = function() {
//   return String(this) === String(this).toUpperCase() && String(this) !== String(this).toLowerCase()
// }

// // console.log(String.prototype)
// console.log(isUpperCase("D"))


// const numberArr = [5, 8, 13,  12, 10, 12, 9, 6, 99]

// Array.prototype.myFindMethod  = function(arr) {
//   return arr.find(element => element > 10)
// }

// console.log(Array.prototype.myFindMethod(numberArr))
// console.log(Array.prototype)



// const movieRatings = [
//   {
//     theTermintator: 8,
//   },
//   {
//     theTermintatorTwo: 9,
//   },
//   {
//     predator: 9,
//   },
//   {
//     lastActionHero: 5,
//   },
//   {
//     trueLies: 8,
//   },
//   {
//     conanTheBarbarian: 9,
//   },
// ]
// const object = [8, 9, 9, 5,8,9]

// const movies = (obj) => {
//   if (obj >= 9) {
//     return obj
//   }
// }

// console.log(movies(object))



// var row = [8, 9, 9, 5, 8, 9]
// var items = row.length; // number of items in your array

// for (v i = 0; i < items; i++) { // iterate trough all the items
//     var numberInRow = row[i]; // the number with index number i in rows
//     var isGreaterThanTen = numberInRow >= 9; // true if the number is greater than ten

//     if (isGreaterThanTen) { // will execute if isGreaterThanTen is true
//         console.log(numberInRow); // print number greater than 10 to console.
//     }
// }


// let movies = [8, 9, 9, 5, 8, 9]

// for (let i = 0; i < movies.length; i++) {
//     let numberInArray = movies[i]
//     let isRatingGreaterThanNine = numberInArray >= 9

//     if (isRatingGreaterThanNine) {
//       return numberInArray
//     }
// }

// let movies = [8, 9, 9, 5, 8, 9]
// rating = [9]

// const  findGreater = (arr, elem)  => {

//   return arr.filter((item) => {
//     return item >= elem
//   })
// }

// console.log(findGreater(movies, rating))


// const  findGreater = (arr, elem)  => {
//   let newArr = []

//   for (let i = 0; i < arr.length; i++) {
//     if (elem[i] >= arr[i]) {
//       console.log(i)
//     } else {
//      newArr
//     }
//   }
 
// }


// 
// rating = [9]

// const  findGreater = (arr, elem)  => {
// var i = 0;

// while (numArray[i] < 100) {
//   console.log((numArray[i++]))
// }


// let movies = [8, 9, 9, 5, 8, 9]
// elem = (9)

// const  findGreater = (arr, elem)  => {
// var i = 0;

// while (elem >= arr[i]) {
//      arr[i++]
// }
// }

// console.log(findGreater(movies, elem))



var Array = (1,4,66,123,240,444);


const rock = (numArray) => {
  var i = 0;
  while (numArray[i] < 10000) {
    numArray[i++]
}
return numArray

}

console.log(rock(Array))

