const msgIn = document.getElementsByClassName('message-in')[0]
const msgOut = document.getElementsByClassName('message-out')[0]
const btn = document.getElementsByClassName('btn')[0]

btn.addEventListener('click', () => {
    let msgContent = msgIn.value

    if (msgContent === '') {
        alert('please Enter A Message')
      } else {
        msgOut.innerHTML = msgContent
        msgIn.value = ''
    }
})

