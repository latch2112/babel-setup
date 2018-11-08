var grocery = {
  id: 'bananas',
  name: 'Bananas',
  units: 6,
  price: 10,
  currency: 'USD'
}
var groceries = {
  [grocery.id]: grocery
}

var throwError = message => {
  throw new Error(message)
}

var double = value => value * 2


console.log(double(3))
// <- 6
