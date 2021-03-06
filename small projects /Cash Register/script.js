const  checkCashRegister = (price, cash, cid) => {
  const currency = [
    { name: 'ONE HUNDRED', val: 100.0 },
    { name: 'TWENTY', val: 20.0 },
    { name: 'TEN', val: 10.0 },
    { name: 'FIVE', val: 5.0 },
    { name: 'ONE', val: 1.0 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
  ]

 const out = { change: [], status: null }
 let change = cash - price

  let register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1]
      acc[curr[0]] = curr[1]
      return acc
    },
    { total: 0 }
  );

  if (register.total === change) {
    out.status = 'CLOSED'
    out.change = cid
    return out
  }

  if (register.total < change) {
    out.status = 'INSUFFICIENT_FUNDS'
    return out
  }

  var change_arr = currency.reduce(function(acc, curr) {
    var value = 0
    while (register[curr.name] > 0 && change >= curr.val) {
      change -= curr.val
      register[curr.name] -= curr.val
      value += curr.val

      change = Math.round(change * 100) / 100
    }
    if (value > 0) {
      acc.push([curr.name, value])
    }
    return acc
  }, [])


  if (change_arr.length < 1 || change > 0) {
    out.status = "INSUFFICIENT_FUNDS"
    return out
  }

  out.status = "OPEN"
  out.change = change_arr
  return out
}


console.log(checkCashRegister(19.5, 20,))