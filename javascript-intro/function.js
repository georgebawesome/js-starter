function sum(num1, num2) {
  // console.log(num1 + num2)
  return num1 + num2
}

console.log(sum(3,5))
var mySum = sum(2,4)

console.log(mySum)


// function expression
var multiply = function(n1, n2) {
  console.log(n1 * n2)
}

multiply(2,8)


var division= function(n1,n2) {
  var result = n1 / n2;
  return result * 2
}

console.log(division(8,2))

// Arrow function 

// var sum2 = (n1,n2) => {
//   return n1 + n2
// }

var sum2 = (n1,n2) => n1 + n2


console.log(sum2(2,4))