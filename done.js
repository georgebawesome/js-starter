//if else
let n1 = 6;
let n2 = 7;
if (n1 == n2) {
	console.log("True");
} else {
	console.log("False");
}

//switch statement
var day = 2;
switch (day) {
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("Wednesday");
		break;
	default:
		console.log("Another day");
}

//function without parameter
function demo() {
	console.log(true);
}
demo();

//function with parameters
function test(name, age) {
	console.log("Hi you are " + name + " and is " + age + " years old");
}
test("David", 25);
test("George", 30);

//prompt function
var name = prompt("Please enter your name");
var age = prompt("Please enter your age");
console.log(`Hi, you are ${name} and you are ${age} years old`);

//confrim function
var answer = confirm(`Are you a good guy?`);
if (answer == true) {
	console.log("Keep it up");
} else {
	console.log("Grow up bro");
}

//constructor function
function contact(name, number) {
	this.name = name;
	this.number = number;
}
var a = new contact("David", 12345);
var b = new contact("Amy", 98371);

console.log(a.name + ": " + a.number);
console.log(b.name + ": " + b.number);

//for loops
const names = ["John", "Maria", "Nexa"];
for (name of names) {
	console.log(name);
	if (name === "Maria") {
		console.log("Maria is in my list");
		break;
	}
}

//while loops
let loading = 0;
while (loading < 100) {
	console.log("Still loading");
	loading++;
}

//do while loop
var i = 1;
do console.log(i++);
while (i < 10);
