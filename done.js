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
var names = ["John", "Maria", "Nexa"];
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

//for each
var companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2003 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

companies.forEach(function (companies) {
	console.log(companies.category);
});

//filter array using for loop
var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
for (var i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		console.log(ages[i]);
	}
}

//filter array
var ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
var canDrink = ages.filter(function (age) {
	if (age >= 21) {
		return true;
	}
});
console.log(canDrink);

//filter array in one line using arrow function
var canSmrink = ages.filter((age) => age >= 21);
console.log(canSmrink);

//filter example 2
var companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2003 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

var lastedTenYears = companies.filter(
	(company) => company.end - company.start >= 10
);
console.log(lastedTenYears);
