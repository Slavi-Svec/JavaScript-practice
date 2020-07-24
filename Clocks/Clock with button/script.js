const screen = document.getElementsByClassName ('clock-screen')[0]

const newTime = ()  => {
  const d = new Date()
  const s = d.getSeconds()
  const m = d.getMinutes()
  const h = d.getHours()
  screen.textContent = h + ':' + m + ':' + s
  }

  const btn = document.getElementsByClassName ('btn')[0]
  btn.addEventListener('click', () => {
    setInterval(newTime, 1000)
  })
