const btn = document.getElementsByClassName('btn')[0]

  const fetchUrl = `http://www.omdbapi.com/?s=inception&apikey=77308b20`
  fetch(fetchUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
