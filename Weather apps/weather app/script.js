// const btn = document.getElementsByClassName('btn')[0]
const seeLocation = document.getElementsByClassName('location')[0]
const seeWeather = document.getElementsByClassName('weather-out')[0]

const updateWeather = () => {
  const fetchTheUrl =  'http://www.omdbapi.com/?i=tt3896198&apikey=77308b20'
  fetch(fetchTheUrl)
    .then((response) =>  response.json())
    }

    console.log(updateWeather())