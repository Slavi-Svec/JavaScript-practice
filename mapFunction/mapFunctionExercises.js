// 1) Make an array of numbers that are doubles of the first array

// function doubleNumbers(arr){
  // your code here
// }

// solution

// const doubleNumbers = (arr) =>  newArr = arr.map(add =>  add * 2)

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// 2) Take an array of numbers and make them strings

// function stringItUp(arr){
//   // your code here
// }

// const stringItUp = (arr) => newString = arr.map(x => x.toString())


// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names

// function capitalizeNames(arr){
//   return arr.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
// }

// // const capitalizeNames = (arr) => newArr = arr.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


// const sentenceToWordsArray = str => str.split(' ');
// const firstLetterToUppercase = word => word.replace(word[0], word[0].toUpperCase());
// const transformWordInArray = arr => arr.map(firstLetterToUppercase)
// const arrayToString = arr => arr.reduce((sentence, word) => `${sentence} ${word}`);
// const print = val => console.log(val);

// const action = (function1, function2) => function2(function1);
// const compose = arr => val => arr.reduce(action, val);
// const algorithm = [sentenceToWordsArray, transformWordInArray, arrayToString, print];
// const CAPITALIZE = compose(algorithm);

// CAPITALIZE('the quick brown fox')


