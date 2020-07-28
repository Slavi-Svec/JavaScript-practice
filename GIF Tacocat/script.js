const images = ["tacocat1.png", "tacocat2.png"]
const image = document.getElementById("image")
let currentPos = 0

const changeImage = () => {
  if (++currentPos >= images.length)
      currentPos = 0

  image.src = images[currentPos]
}
setInterval(changeImage, 300)
