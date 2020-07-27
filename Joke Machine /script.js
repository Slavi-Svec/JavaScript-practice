const btn = document.getElementsByClassName('btn')[0]
const jokeArea = document.getElementsByClassName('jokes')[0]

btn.addEventListener('click', () => {
const fetchTheUrl =  'https://api.chucknorris.io/jokes/random'
fetch(fetchTheUrl)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    const randomJoke = data.value
    console.log(randomJoke)
   jokeArea.textContent = randomJoke
  })
})




