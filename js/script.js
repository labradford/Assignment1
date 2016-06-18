//STEP 1 - convert to camel case
/*
var someMonth; // var some month;
function theMonth() // function theMonth
currentMonth; // current-month
var summerMonth; // var summer month;
function myLibrary() // MyLibrary-afunction
*/

//STEP 2 examples of expressions
/*
44 //numeric 
"cat" // string 
true //boolean 
null // null 
*/

//STEP 3 2 examples of variable expressions
/*
var sum = 1+1;
var diff = 2-1;
*/

//STEP 4 declare 9 variables
/*
var strfirstName, strlastName, straddress, strcity, strstate, strzipCode, numyourAge, strreferralSource, boomayWeContactYou;
*/

//STEP 5 assign variables 3 ways
/*
method 1
var firstName;
firstName = 'Lea';
var lastName;
lastName = 'Bradford';
var address;
address = '4013 David Lane'
var city;
city = 'San Diego';
var state;
state = 'CA';
var zipCode;
zipCode = '92129';
var yourAge;
age = 44;
var referralSource;
referralSource = 'friend';
var mayWeContactYou;
mayWeContactYou = false;

method 2
var firstName = 'Lea';
var lastName = 'Bradford';
var address = '4013 David Lane';
var city = 'San Diego';
var state = 'CA';
var zipCode = '92129';
var yourAge = 44;
var referralSource = 'friend';
var mayWeContactYou = false;

method 3
var firstName = 'Lea', lastName = 'Bradford', address= '4013 David Lane', city = 'San Diego', state = 'CA', zipCode = '92129', yourAge = 44, referralSource = 'friend', mayWeContactYou = false;
*/

//STEP 6
/*
var one = 1 + 'string';
"1string" //result 

var two = true + 'string';
"truestring" //result

var three = 1 + true;
2 //result
*/

//STEP 7 hoisting
/*
hoisting is when JavaScript moves declarations to the top. You can assign a value to a variable before declaring the variable. Initialized variables are not hoisted.
var a = 5;
a + b;
var b = 4;
NaN //result
*/

//STEP 8 is this string valid? no
/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former."';
console.log(someString);

fixed version:
var someString = "Who once said, 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.'";
*/

//STEP 9 create a null and an undefined variable
/*
var undefined;
var isNull = null;
*/

//STEP 10 use typeof to return these data types: string, number, Boolean, object, and undefined
/*
typeof 'happy'; //string
typeof 44; //number
typeof true; //boolean
typeof {
	mom : 'Jane',
	dad : 'Joe',
	daughter : 'Jane',
	son1: 'Jack',
	son2: 'Jared'
}; //object
typeof undeclaredVariable; //undefined
*/

//STEP 11 create alert box
/*
alert('Hello' + ' Lea Ann Bradford' + ', welcome to the JavsScript class!');
*/

//STEP 12
/*
var name = 'Lea Ann Bradford';
alert('Hello ' + name + ', welcome to the JavaScript class!');
*/
//STEP 13
/*
var name = 'Lea Ann Bradford', course = 'JavaScript';
alert('Hello ' + name + ', welcome to the ' + course + ' class!');
*/

//STEP 14
/*
var name = 'Lea Ann Bradford', course = 'JavaScript';
alert('Hello ' + name + ',\nwelcome to the ' + course + ' class!');
*/

//STEP 15
/*
var name = prompt("Please enter your name"), course = 'JavaScript';
alert('Hello ' + name + ',\nwelcome to the ' + course + ' class!');
*/

//STEP 16
/*
var name = prompt("Please enter your name"), course = prompt("Please enter your course");
alert('Hello ' + name + ',\nwelcome to the ' + course + ' class!');
*/

//STEP 17  
/*
var x = 10;
var y = 20;
console.log(x + y);
*/

//STEP 18
/*
var x = 20;
x = x+=x;
console.log(x);
*/

//STEP 19 
/*
var x = 20;
x = x*=5;
console.log(x);
*/

//STEP 20  
/*
var x = 20%3;
x = x/=1;
console.log(x);
*/

//STEP 21 logical and comparison redo
/*
var x = 5;
var y = 5;
var sum = x + y;
var result; 
if (sum===10 && sum > 0) {
result = true 
} else {
	result = false
};
console.log(result);
*/

//STEP 22 
/*
var x = 5;
var y = 5;
var diff = x - y;
var result
if (diff === 10 || x < 0) {
result = true
} else {
	result = false
};
console.log(result);
*/

//STEP 23 Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is
function widget(){};
widget = new widget();
console.log(typeof (widget));
/*

*/

//STEP 24 1.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

/*

*/

//STEP 25 1.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

/*

*/

