// // adding to the previous clock
//   zeros in front of the numbers
//   toggle on and off

//   const screen = document.getElementsByClassName ('clock-screen')[0]
//   function newTime() {
//     const today = new Date();
//     const h = today.getHours();
//     const m = today.getMinutes();
//     const s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     screen.innerHTML =
//     h + ":" + m + ":" + s;
//     let t = setInterval(newTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
// }


// const btn = document.getElementsByClassName ('btn')[0]
//   btn.addEventListener('click', () => {
//     if ()
//     setInterval(newTime, 500)
//   })


//   var state = false;



// button.onclick = function() {
//   state = !state;
//   if (state) {
//     button.innerHTML = "ON";
//   } else {
//     button.innerHTML = "OFF";
//   }
// }
var state = false;
const screen = document.getElementsByClassName ('clock-screen')[0]
const btn = document.getElementsByClassName ('btn')[0]
  btn.addEventListener('click', () => {
    state = !state;
    if (state) {
      screen.innerHTML = "ON";
    } else {
      screen.innerHTML = "OFF";
    }
  })