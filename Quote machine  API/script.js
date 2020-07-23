const btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click', () => {
  const fetchUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
  fetch(fetchUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const totalNumberQuotes = data.quotes.length
      const quote = data.quotes[Math.floor(Math.random() * totalNumberQuotes) + 1].quote
      document.getElementsByClassName("quotes")[0].textContent = quote;
    })
})