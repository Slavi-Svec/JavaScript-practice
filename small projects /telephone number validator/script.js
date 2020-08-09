const telephoneCheck = (str) => {
  let check = /^(1[\s-]?)?(\([1-9]\d\d\)|[1-9]\d\d)[\s-]?[1-9]\d\d[\s-]?\d{4}$/g
    return check.test(str)
  }

