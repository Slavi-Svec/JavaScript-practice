// const findOdd = (A) => {

// }



// doTest([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5);
// doTest([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
// doTest([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
// doTest([10], 10);
// doTest([1,1,1,1,1,1,10,1,1,1,1], 10);
// doTest([5,4,3,2,1,5,4,3,2,10,10], 1);


// console.log(findOdd[5,4,3,2,1,5,4,3,2,10,10])



// arr = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]
// const s = arr.reduce((m,v) => {
//   m[v] = (m[v]||0)+1; return m;
// }, {});





// console.log(s)

// var res = Object.values(s).reduce((acc, elem) => {
// 	if (acc % 2 !==0) acc[elem] = s[elem]
// 	return acc
// }, {})
// console.log(res)



// const findOdd = (A) => {
//   const s = A.reduce((m,v) => {
//     m[v] = (m[v]||0)+1; return m;
//    }, {})
//    const r = Object.values(s)
//    return ((r.filter((x) => x % 2 !==0))).join()
// }

// console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]))



// __________________________________________________________________________________________________________________________________________


// const x =  //[1,0,15])
// ([1,2,'aasf','1','123',123]) == [1,2,123]
// const filter_list = (l) => l.filter((item) => typeof item == 'number')

// console.log(filter_list([1,2,'aasf','1','123',123]))

// const myArray = [1,2,'aasf','1','123',123]
// const x = myArray.filter((item) =>  {
//   return typeof item !== 'string'
// })
// console.log(x)

// __________________________________________________________________________________________________________________________________________


// const find = (a, e) => {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === e) return i;
//   }
//   return "Not found";
// }

// console.log(find( [2,3,5,7,11],5))



// const find = (a, e) => (a.indexOf(e)) ? a.indexOf(e) : 'Not found'


// console.log(find( [2,3,5,7,11],5))

// __________________________________________________________________________________________________________________________________________

// function shortenToDate(longDate) {
//   const w = longDate.split(' ')
//   const v =  w[w.length -1]

// }

// console.log(shortenToDate("Friday May 2, 9am"))

// "Friday May 2"

// let str = "Friday May 2, 9am"
// str = str.substring(0, str.length - 5)
// console.log(str);




// function shortenToDate(longDate) {
//   var mySplitResult = longDate.split(" ");
//   var lastWord =  mySplitResult[mySplitResult.length-1]
//   return lastWord
// }


// __________________________________________________________________________________________________________________________________________
const arrayDiff = (a, b) =>  a.filter(x => !b.includes(x))
console.log(arrayDiff([3,4], [3]))



// Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
// Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
// Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
