const screen = document.getElementsByClassName ('clock-screen')[0]


const displayClock = ()  => {
  let display = new Date().toLocaleTimeString();
  screen.innerHTML = display;
  }

  const btn = document.getElementsByClassName ('btn')[0]
  btn.addEventListener('click', () => {
    setTimeout(displayClock, 1000);
  })
  




