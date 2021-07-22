const paintLetterboxes = (start, end) => {
    let letterBox = [0, 0, 0, 0, 0, 0, 0, 0, 0]

    for (let i = start; i <= end; i++) {
        const numToString = i.toString()
        for (let j = 0; j < numToString.length; j++) {
            // console.log((numToString[j]))
            letterBox[numToString[j]] = 'kevin'
            console.log(letterBox)
        }
    }
    // console.log(letterBox)
}


console.log(paintLetterboxes(123,125))

// // const str  = 24680
//  for (let i = 0; i < str.length; i++) {
//     console.log((str[i]))
// //   }