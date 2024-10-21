/*
//video 03: 
console.log("Hello World"); //console is object and log is method

const x= 100;

console.log(x)

console.error('Alert');

console. warn('warning')

console.table({name: 'Rohit', email: 'rohit@gmail.com'});

console.group('simple');
console.log(x)
console.error('Alert');
console. warn('warning')
console.groupEnd();
//adding css style in script
const styles = 'padding: 10px; background-color: black; color: green';

console.log('%cHello World', styles);

//video 04:
/*
keyboard shortcut for vs code:
ctrl + right/left: Navigate to start or end of a line
alt + right/left: Navigate through the object of a line
shift + alt + right/left: Select through obejct faster
shift + ctrl + right/left: Selct complete from where you are either right or left.
alt + up/down: move the line up/down.
shift + alt + up/down: duplicate the line up/down.
hold shift : highlight the object currently selected.
ctrl + D: select the next highlighted object in same file.
ctrl + shift + L: make changes on all the highlighted object same same time.
ctrl + shift + O : search for file in search pallate
ctrl + alt + F: look for search string in same file
ctrl + shift + F: look for seach string in all file of the project.
ctrl + B: toggle side bar
ctrl + ~: toggle terminal

//video 05: variable and const

//ways to declare a  variable
//var, let, const

//var is not used much nowaday
let firstName = 'John';
let lastName = 'Doe';

console.log(firstName, lastName);

//if we were to use var in place of let the below comment code won't give an error
//otherwise normally it throws an error
//console.log(firstName, lastName,age);

let age = 30;  

console.log(age);

//Naming conventions:
// - only letter,numbers,underscores and doller signs
// - Can't start with a number

// multi-word formatting 
//firstName = camelCase
//first_name= underscore
//FirstName = Pascalcase
//firstname = lowercase

//re-assgining varibles
age = 31;

console.log(age);

let score;
score = 1;
console.log(score);

const arr = [1,2,3,4];

arr.push(5);

const person = {
    name:'rohit'
}

person.name = 'raj';
person.email = 'rohit@gmail.com'

//Declare multiple value at once.
let a,b,c;

const d=10, e=20, f=30;

console.log(d);

//video 6: Data types

//string 
const first_Name = "Sara";

//number
const Age = 30;
const temp = 98.3;

//boolean
const haskids = true;

//null
const aptNumber = null;

//undefines
let scores; //not intialising the vatiable is undefine
const score1 = undefined;

//symbol
const id = Symbol('id');

//bignit
const n = 9007199254740991n;

//Reference types
const numbers = [1,2,3,4]; //array
const person ={
    name: 'rohit',
};

function sayHello() {
    console.log('Hello');
}
const output = first_Name;
//const output = sayHello;
console.log(output,typeof output)


//video 07: Primitive vs reference types

//value are stored on the stack
const name = 'John';
const age3 = 30;

//refernce value are stored on the heap

const person ={
    name: 'rohit',
    age:30
};

//refer to slide 

let newName = name;
newName = 'Johnathan';

let newPerson = person;
newPerson.name = 'Bradley';


console.log(name,newName);
console.log(person, newPerson); 


//video 8: type conversion
let amount = '100';


//Change string to number
amount = parseInt(amount); //convert str to int
//another way 
//amount = +amount;
//amount = Number(amount);
console.log(amount, typeof amount);

//change number to string
//but string is a primitive type and cannot have a function since it is not an object.
//here javascript uses a temporary wrapper to convert it into string.
amount = 100;
amount = amount.toString();
//another way 
//ammount = String(amount);

//change string to decimal
amount = '99.5';
amount = parseFloat(amount);
console.log(amount, typeof amount);

//change number to boolean
amount = 1;
amount = Boolean(amount)
console.log(amount, typeof amount);


//NaN cases
console.log(Math.sqrt(-1));
console.log(1+NaN);
console.log(undefined + undefined);
console.log('foo'/3); //most of time you will get NaN for string divide by number


//Video 09: Operators

//Arithmatic Opertor
let x1;
x1=5+5;
console.log(x1);

//conactenation
x1='Hello'+' World';
console.log(x1);

//Exponent
x1 = 2 ** 3;
console.log(x1);

//Increment
x1=1;
x1++;
console.log(x1);

//Decrement
x--;
console.log(x1);

//Assignment 
x=20;
x+=5;
console.log(x1);

//comparison operator
x=2=='2' ;  //evaluate the boolean expresion and not the type
console.log(x1);

x=2==='2'; //evaluate both boolean expresion as well as type
console.log(x1);

x= 2 != 2;  //false
x= 2 != '2'; //true 
console.log(x1);

//video 10: type Coercion

let x2;

x2= 5 + '5'; //this is type coercion where javascript implicitly convert the type to string because of concatination

console.log(x2,typeof x2);
//you need to first convert the string to number  and then add
x2 = 5 + Number('5'); 
console.log(x2,typeof x2);
 x2 = 5 + null; //5: NULL is coercied to 0;
console.log(x2,typeof x2);
x2= Number(null);
console.log(x2,typeof x2);
x2= 5 + true ;//6: true is coercied into 1 and false into 0
console.log(x2,typeof x2);
x2 = 5 + undefined; //NaN
console.log(x2,typeof x2);


//video 11: Working with string
 let x3;
 const name1= 'Rohit';
 const age1='30';

 x3='Hello, my name is ' + name + ' and I am' + age + ' years old';
 console.log(x3);

 //template laterals
 x3='Hello, my name is ${name1} and  I am ${age1} years';
 console.log(x3);

 //string properties and method
 //const s = 'Hello World';
 const s = new String('Hello World') // behind the scene of wrapper
 x3 = s.length;

 //access value by key
 x3= s[0];
 x3=s.__proto__; //shows different type of stinng method

 x3= s.toUpperCase();
 x3=s.toLowerCase();
 x3=s.charAt(0);
 x3=s.indexOf('d');
 x3=s.substring(7);
 x3=s.slice(0,5);
 x3=s.slice(-11,-6); //hello using neagative number
 console.log(x3);
 s='           Helo World'; //if we do cocnsole log after this we will get while space in output.
 x3=s.trim(); //remove any white space
 x3=s.replace('World','Rohit');
 x3=s.includes('Hello') //return true
 console.log(x3);
 x3 = s.valueOf(); //return primitive string 
 x3 = s.split(' ') //split the string based on space
 
 console.log(x3);


 //video 12: Capitalise Challenge
 const myString = 'developer';
 let myNewString;
 //solution 1
 myNewString = myString.charAt(0).toUpperCase()+myString.substring(1);
 //solution 2
 myNewString = myString[0].toUpperCase()+myString.substring(1);
 //solution 3
 myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;
 //solution 4
 myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString); 

//video 13: Working with number
let v;
const num = new Number(5);

v = num.toString(num);

v = num.toString().length;

v = num.toFixed(2); //string representation of decimal

x = num.toPrecision(2); //return fixed number of digit

x= num.toExponential(2); //5.00e+0

x = num.toLocaleString('en-us');

x = Number.MAX_VALUE;

x= Number.MIN_VALUE;

console.log(num);


//Video 14: Math Object
let f;

f = Math.sqrt(9);

f = Math.abs(-5);

f = Math.round(4.2);

f= Math.ceil(6.2); //round up

f = Math.floor(4.9); //riund down

f = Math.pow(2,3); //8

f = Math.min(4,5,3);

f= Math.max(4,5,6);

f= Math.random(); //default number from 0 - 1

f = Math.floor(Math.random() *10 +1 ); // number from 1-10

console.log(f);


//video 15: Number challenge

let x,y;

x = Math.floor(Math.random()*100 + 1);
y= Math.floor(Math.random()*50 + 1);

//Get sum
const sum = x + y;
const sumOutput = `${x}+${y} = ${sum}`;
console.log(sumOutput);

//Get Product
const prod = x * y;
const prodOutput = `${x} X ${y} = ${prod}`;
console.log(prodOutput);

//Get difference 
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput);
*/
//video 16: Date & Times

let d;

d = new Date();

console.log(d);

console.log(typeof d); //its an object

d = d.toString();

console.log(typeof d); //change it to string type

d = new Date(2021, 0, 10, 12, 30, 0); //passing number as an argument
console.log(d);

d = new Date("2021-07-10T16:30:00"); //passing string as an argument
console.log(d);

d = new Date("07/10/2021 12:30:00"); //passing string as an argument
console.log(d);

//timelaps express in millisecond

d = Date.now(); //return timestamp since 1970 till date
console.log(d);

d = new Date("07-10-2022 14:30:00"); //return timestamp since 1970 till
d = d.getTime();
d = d.valueOf();
console.log(d);

//create date object from timestamp
d = new Date(4575636848); //return timestamp since 1970 till date
console.log(d);

d = Math.floor(Date.now() / 1000); // timestamp in seconds
console.log(d);

//video 17: Date Method

let t;
let a = new Date(); //initialing date object into a

t = a.toString();
t = a.valueOf();

//get specific part of date
t = a.getFullYear();

t = a.getMonth() + 1;

t = a.getDate(); //day of the month

t = a.getDay(); //day of the week

t = a.getHours();

t = a.getMinutes();

t = a.getSeconds();

t = a.getMilliseconds();

t = `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`; //will be using this in real project

//here we are calling an api then we are able to get date
t = Intl.DateTimeFormat("en-US").format(a);

t = Intl.DateTimeFormat("default", { month: "long" }).format(a);

//we can use  method on date object as well
t = a.toLocaleDateString("default", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZone: "America/New_York",
});
console.log(t);
