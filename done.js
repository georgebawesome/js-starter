//if else
let n1 = 6;
let n2 = 7;
if (n1 == n2) {
	console.log("True");
} else {
	console.log("False");
}

//fi else new way
let n1 = 6;
let n2 = 7;
var val = n1 > n2 ? `n1 is greater` : `n2 is greater`;
console.log(val);

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

//filter example
var lastedTenYears = companies.filter(
	(company) => company.end - company.start >= 10
);
console.log(lastedTenYears);

//array map 1
var companyNames = companies.map((company) => {
	return company.name;
});

console.log(companyNames);

//array map 2
var companyDetials = companies.map((company) => {
	return `${company.name} lived from ${company.start} to ${company.end}`;
});

console.log(companyDetials);

// array sort method
var sortedCompanies = companies.sort((c1, c2) => {
	if (c1.start > c2.start) {
		return 1;
	} else {
		return -1;
	}
});

console.log(sortedCompanies);

// array reduce
var compTotYrs = companies.reduce(
	(total, company) => total + (company.end - company.start),
	0
);
console.log(compTotYrs);

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

//sort array
var ageSort = ages.sort((a, b) => (a > b ? -1 : 1));
console.log(ageSort);

// array reduce
var ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

//combime array methods
var combined = ages;
//	.map((age) => age * 2)
//.filter((age) => age >= 21)
//	.sort((a, b) => a - b)
//.reduce((a, b) => a + b, 0);

console.log(combined);

//es6 class
class User {
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}
	register() {
		console.log(
			`${this.username} is now registered with email ${this.email}`
		);
	}
	static countUsers() {
		console.log(`there are 50 users in the database`);
	}
}

let bob = new User("bob", "bob@example.com", "12345");
bob.register();
User.countUsers();

// extendt that class to use with another
class Member extends User {
	constructor(username, email, password, memberPackage) {
		super(username, email, password);
		this.package = memberPackage;
	}
	getPackage() {
		console.log(
			`${this.username} is subscribed to the ${this.package} package`
		);
	}
}

let mike = new Member("mike", "mike@gmail.com", "123", "Standard");

mike.register();
mike.getPackage();

class Page {
	constructor(url) {
		this.url = url;
	}

	open() {
		console.log("Opening page", this.url);
	}

	refresh() {
		console.log("refreshing...");
	}
}

// Create an instance of the Page class
const p1 = new Page("https://medium.com");
console.log(p1.url);
p1.open();

const p2 = new Page("https://google.com");
console.log(p2.url);
p2.open();
p2.refresh();

// Create a ContactPage (child) class
class ContactPage extends Page {
	constructor(url, title) {
		super(url);
		this.title = title;
	}

	open() {
		console.log("Opening page", this.url, "with title", this.title);
	}

	get loginBtn() {
		console.log("login btn selector");
	}
}

// Create an instance of the ContactPage class
const contact = new ContactPage("https://medium.com/contact", "Contact Page");
contact.open();
contact.loginBtn;
