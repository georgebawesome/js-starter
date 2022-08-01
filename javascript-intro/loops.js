// for (var i = 0; i < 100; i++) {
//   console.log(i)
// }

var planets = ['Earth', 'Mercury', 'Jupiter', 'Mars']

// planets[0]
// console.log(planets.length)

// for (var i=0; i < planets.length; i++) {
//   console.log(planets[i])
// }

for (var p of planets) {
  console.log(p)
}


// for in
var names = {
  name1: 'Joe',
  name2: 'Jane',
  name3: 'Lisa'
}

for (var n in names) {
  // console.log(n)
  console.log(names[n])
}

planets.forEach(function (i) {
  console.log(i)
})

var i = 0
while (i < 10) {
  console.log(i)
  i++;
}