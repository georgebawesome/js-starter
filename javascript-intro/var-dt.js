// Variables are used to store info that can be used or updated at a later time

var num = 10
var name = "Jane"

console.log(num)
console.log(name)


// Data Types

// Number
var age = 60
var age2 = 30
var ageSum = age % age2

console.log(ageSum)

// Operators: + - / %


// String (Text)
var sentence = "Hello, my name is Bugs Bunny"
var sentence2 = 'I am 10 years\' old'

console.log(sentence + ' ' + sentence2)


// Boolean - True / False

var fruit1 = 'apple'
var fruit2 = 'banana'
var fruit3 = 'apple'

var allowedToDrive = true
var allowedToDrink = false

console.log(fruit1 == fruit2)
console.log(fruit1 == fruit3)
console.log(allowedToDrink)
console.log(allowedToDrive)


// undefined
var a
console.log(a)

a = 'test'
console.log(a)

// null
var x = null
console.log(x)


// object 

var names = {
  name1: 'Joe',
  name2: 'Jane'
}

console.log(names)
console.log(names.name1)
console.log(names['name2'])

// names = 'test'
// names = 10
console.log(names)


// Array

var planets = ['Earth', 'Mercury', 'Jupiter']

console.log(planets)
console.log(planets[3])

console.log(typeof names)


// Symbol - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
