let timer = 0
let stopTimer = false
function currentTime() {
  const date = new Date(1595631219 *1000)
  const time =
    `${date.getHours()}: ${addLeadingZero(date.getMinutes())} : ${addLeadingZero(date.getSeconds())}`
  document.getElementsByClassName('clock-screen')[0].innerHTML = time
  timer = setTimeout(currentTime, 500)
}

function clearTime() {
  clearTimeout(timer);
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

document.getElementsByClassName('btn')[0].addEventListener('click', () => {
  if (stopTimer) {
    clearTime()
    stopTimer = !stopTimer
  } else {
    currentTime()
    stopTimer = !stopTimer
  }
})

console.log(new Date(1595632602 * 1000))