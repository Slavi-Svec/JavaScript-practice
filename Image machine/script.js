const btn = document.getElementsByClassName('btn')[0]
btn.addEventListener('click', () => {
  document.getElementsByClassName("image")[0].style.backgroundImage = "url(https://picsum.photos/200/300/?random&t=" + new Date().getTime() +")"
})
