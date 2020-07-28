// const btn = document.getElementsByClassName('btn')[0]
const seeLocation = document.getElementsByClassName('location')[0]
const seeWeather = document.getElementsByClassName('weather-out')[0]

const updateWeather = () => {
  const fetchTheUrl =  'http://api.openweathermap.org/data/2.5/weather?zip=2042,au&units=metric&appid=e1ec3878f6bdc360d0bd74911e0ba7fa'
  fetch(fetchTheUrl)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      const getLocation = data.name
      seeLocation.textContent = getLocation
      const getTemp = data.main.temp
      seeWeather.textContent = getTemp
    })
  }

setInterval(() => {
  updateWeather()
}, 10000)


console.log(updateWeather())
