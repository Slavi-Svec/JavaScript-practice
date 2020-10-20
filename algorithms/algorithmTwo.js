// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

const arr = (n) => {
  const a = [...Array(n + 1).keys()]
  let b = a.pop()
  return a.flat(2)
}

console.log(arr(5))

// ________________________________________________________________________________________________________________

