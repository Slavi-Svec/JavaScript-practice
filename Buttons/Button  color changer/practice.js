
const colorPallete = '0123456789ABCDER'

const RandomColors = (colors) => {
  let colorHex = '#'
  let ColorsRandomise = colors.split('').sort(() => .5 - Math.random()).slice(0,6).join('')
  colorHex += ColorsRandomise
  return colorHex
}