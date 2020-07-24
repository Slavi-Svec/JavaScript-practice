var state = false;
const screen = document.getElementsByClassName ('screen')[0]
const btn = document.getElementsByClassName ('btn')[0]

  btn.addEventListener('click', () => {
    state = !state;
    if (state) {
      screen.innerHTML = "ON";
    } else {
      screen.innerHTML = "OFF";
    }
})