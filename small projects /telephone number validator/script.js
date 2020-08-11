const input = document.getElementsByClassName('input')[0]
const buttons = document.getElementsByClassName('button')
const valid = document.getElementsByClassName('valid')[0]
const invalid = document.getElementsByClassName('invalid')[0]
const phoneBtn = document.getElementById('phone-button')

// function to check if the number is valid using the regex.
const telephoneCheck = (str) => {
  let check = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g

  return check.test(str)
}

// loop thru all the buttons.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
  console.log(e)
    input.value += e.target.innerHTML
  })
}

// console.log(buttons)

// check if numbers are valid or not.
const validNumber = (input) => {
  telephoneCheck(input)
    ? valid.style.visibility = 'visible'
    : invalid.style.visibility = 'visible'
}

// functionality on the buttons.
phoneBtn.addEventListener('click', () => {
  validNumber(input.value)
})

// input text option to write buttons into text area.
input.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    validNumber(e.target.value)
  }
})