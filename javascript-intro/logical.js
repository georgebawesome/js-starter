// Logical operators are used to determine the logic between variables or values.

var x = 10
var y = 20

console.log(x < 5 && y < 30)


console.log(x > 5 || y > 30 )



// *Remember*
// TRUE and FALSE = FALSE
// FALSE and TRUE = FALSE

// OR operators
// FALSE or TRUE = TRUE
// TRUE or FALSE = True


// Ternary (Conditional) operator

// varname = (condition) ? value1 : value2

var age = 20
var allowedToDrive = age > 18 ? 'You are eligible' : 'You are not eligible'

console.log(allowedToDrive)