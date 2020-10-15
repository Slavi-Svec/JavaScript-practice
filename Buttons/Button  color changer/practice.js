
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




String.prototype.isUpperCase = function() {
  return String(this) === String(this).toUpperCase() && String(this) !== String(this).toLowerCase();
}

console.log(String.prototype)



