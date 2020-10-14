// const getRandom = () => {
//   let letters = '0123456789ABCDER'.split('')
//   let color = '#'
//   for (let i = 0; i < 6; i++){
//     color += letters[Math.floor(Math.random() * 16 )]
//   }
//   return color
// }

  const getRandom = () => {
    let letters = '0123456789ABCDER'
    let color = '#'
    let newArr = letters.split('').sort(() => .5 - Math.random()).slice(0,6).join("")
    color += newArr
    return color
  }

const btn = document.getElementsByClassName ('btn')[0]
btn.addEventListener('click', () => {
document.body.style.backgroundColor = getRandom()})

