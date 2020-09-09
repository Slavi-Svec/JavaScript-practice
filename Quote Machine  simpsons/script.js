const btn = document.getElementsByClassName('btn')[0]
const quoteArea = document.getElementsByClassName('quotes')[0]
const characterArea = document.getElementsByClassName('character')[0]
const imageDiv = document.getElementsByClassName('image')[0]


btn.addEventListener('click', () => {
const fetchTheUrl =  'https://thesimpsonsquoteapi.glitch.me/quotes'
fetch(fetchTheUrl)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const randomQuote = data[0].quote
    const character = data[0].character
    const imageCode = data[0].image

    // console.log(data)
    // console.log(character)
    // console.log(randomQuote)
    console.log(imageCode)
    // console.log(direction)
   quoteArea.textContent = randomQuote
   characterArea.textContent = character
   imageDiv.src = ImageCode

  })
}) 




