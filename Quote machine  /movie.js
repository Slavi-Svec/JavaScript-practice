const btn = document.getElementsByClassName('btn')[0]

  const fetchUrl = `http://www.omdbapi.com/?s=forrest gump&apikey=`
  fetch(fetchUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data)
    })
